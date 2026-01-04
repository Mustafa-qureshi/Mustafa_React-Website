import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  deleteUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthContext: Setting up onAuthStateChanged');
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('AuthContext: onAuthStateChanged fired, user:', user);
      if (user) {
        setCurrentUser(user);
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          // Check if this email should be admin and update if necessary
          if ((user.email === 'admin@example.com' || user.email === 'mustafaqureshi9911@gmail.com') && data.role !== 'admin') {
            console.log('AuthContext: Updating user to admin role');
            await updateDoc(doc(db, 'users', user.uid), { role: 'admin' });
            const updatedData = { ...data, role: 'admin' };
            setUserData(updatedData);
          } else {
            console.log('AuthContext: Setting user data:', data);
            setUserData(data);
          }
        } else {
          // If no data, create default
          const defaultData = {
            fullname: user.displayName || user.email.split('@')[0],
            role: (user.email === 'admin@example.com' || user.email === 'mustafaqureshi9911@gmail.com') ? 'admin' : 'user',
            email: user.email,
            createdAt: new Date()
          };
          console.log('AuthContext: Creating new user data:', defaultData);
          await setDoc(doc(db, 'users', user.uid), defaultData);
          setUserData(defaultData);
        }
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
      setLoading(false);
      console.log('AuthContext: Auth state updated, loading:', false);
    });

    // Fallback: if onAuthStateChanged doesn't fire within 5 seconds, set loading to false
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn('AuthContext: onAuthStateChanged timeout, setting loading to false');
        setLoading(false);
      }
    }, 5000);

    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const signup = async (email, password, fullname) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      const userData = {
        fullname,
        email,
        role: (email === 'admin@example.com' || email === 'mustafaqureshi9911@gmail.com') ? 'admin' : 'user',
        createdAt: new Date()
      };
      await setDoc(doc(db, 'users', user.uid), userData);

      return true;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    console.log('AuthContext: login called with', email);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('AuthContext: login successful', userCredential.user);
      return true;
    } catch (error) {
      console.error('AuthContext: login error', error);
      throw error;
    }
  };

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user data exists, if not create
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        const userData = {
          fullname: user.displayName,
          email: user.email,
          role: (user.email === 'admin@example.com' || user.email === 'mustafaqureshi9911@gmail.com') ? 'admin' : 'user',
          createdAt: new Date()
        };
        await setDoc(doc(db, 'users', user.uid), userData);
      }

      return true;
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    console.log('AuthContext: signOut called');
    try {
      await firebaseSignOut(auth);
      console.log('AuthContext: firebaseSignOut successful');
      return true;
    } catch (error) {
      console.error('AuthContext: signOut error', error);
      throw error;
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      throw error;
    }
  };

  const deleteAccount = async () => {
    try {
      if (currentUser) {
        await deleteUser(currentUser);
        // Firestore data will be cleaned up by security rules or manually
      }
      return true;
    } catch (error) {
      throw error;
    }
  };

  const isAdmin = userData?.role === 'admin' || currentUser?.email === 'mustafaqureshi9911@gmail.com';

  const value = {
    currentUser,
    userData,
    loading,
    signup,
    login,
    googleSignIn,
    signOut,
    resetPassword,
    deleteAccount,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
