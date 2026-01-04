// Firestore utilities for projects
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const PROJECTS_COLLECTION = 'projects';

// Get all projects (admin only)
export const getProjects = async () => {
    try {
        const q = query(collection(db, PROJECTS_COLLECTION));
        const querySnapshot = await getDocs(q);
        let projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Sort by createdAt descending
        projects.sort((a, b) => {
            const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
            const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
            return bTime - aTime;
        });

        return projects;
    } catch (error) {
        console.error('Error getting projects:', error);
        return [];
    }
};

// Get projects by user ID
export const getProjectsByUser = async (userId) => {
    try {
        const q = query(collection(db, PROJECTS_COLLECTION), where('userId', '==', userId), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting projects by user:', error);
        return [];
    }
};

// Get projects by status (admin only)
export const getProjectsByStatus = async (status) => {
    try {
        let q;
        if (status === 'all') {
            q = query(collection(db, PROJECTS_COLLECTION));
        } else {
            q = query(collection(db, PROJECTS_COLLECTION), where('status', '==', status));
        }
        const querySnapshot = await getDocs(q);
        let projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Sort by createdAt descending
        projects.sort((a, b) => {
            const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
            const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
            return bTime - aTime;
        });

        console.log('getProjectsByStatus returned:', projects.length, 'projects for status:', status);
        return projects;
    } catch (error) {
        console.error('Error getting projects by status:', error);
        return [];
    }
};

// Get projects by user and status
export const getProjectsByUserAndStatus = async (userId, status) => {
    try {
        // First get all projects for this user
        const q = query(collection(db, PROJECTS_COLLECTION), where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        let projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Sort by createdAt descending
        projects.sort((a, b) => {
            const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
            const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
            return bTime - aTime;
        });

        // Then filter by status if needed
        if (status !== 'all') {
            projects = projects.filter(project => project.status === status);
        }

        return projects;
    } catch (error) {
        console.error('Error getting projects by user and status:', error);
        return [];
    }
};

// Get single project by ID
export const getProject = async (id) => {
    try {
        const docRef = doc(db, PROJECTS_COLLECTION, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting project:', error);
        return null;
    }
};

// Add new project
export const addProject = async (projectData) => {
    try {
        const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
            ...projectData,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
        });
        return { id: docRef.id, ...projectData, createdAt: Timestamp.now(), updatedAt: Timestamp.now() };
    } catch (error) {
        console.error('Error adding project:', error);
        return null;
    }
};

// Update existing project
export const updateProject = async (id, updateData) => {
    try {
        const docRef = doc(db, PROJECTS_COLLECTION, id);
        await updateDoc(docRef, {
            ...updateData,
            updatedAt: Timestamp.now()
        });
        return { id, ...updateData, updatedAt: Timestamp.now() };
    } catch (error) {
        console.error('Error updating project:', error);
        return null;
    }
};

// Delete project
export const deleteProject = async (id) => {
    try {
        await deleteDoc(doc(db, PROJECTS_COLLECTION, id));
        return true;
    } catch (error) {
        console.error('Error deleting project:', error);
        return false;
    }
};

// Clear all projects (for testing - admin only)
export const clearAllProjects = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, PROJECTS_COLLECTION));
        const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
        await Promise.all(deletePromises);
        return true;
    } catch (error) {
        console.error('Error clearing projects:', error);
        return false;
    }
};