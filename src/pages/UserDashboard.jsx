import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/config';
import { deleteUser } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';

export default function UserDashboard() {
    const { userData, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        if (window.confirm("Are you sure you want to delete your account? This action is irreversible.")) {
            setLoading(true);
            try {
                // Remove from Firestore first
                await deleteDoc(doc(db, "users", currentUser.uid));
                // Delete from Auth
                await deleteUser(currentUser);
                navigate('/');
            } catch (err) {
                setError(err.message + " (You may need to re-authenticate to perform this sensitive action)");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Dashboard</h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back, {userData?.fullname}</p>
                        </div>
                        <div className="flex gap-4">
                            <Link to="/form" className="btn-primary px-6 py-2">My Records</Link>
                        </div>
                    </div>

                    {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                            <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Role</h3>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white capitalize">{userData?.role}</p>
                        </div>
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                            <h3 className="text-blue-600 dark:text-blue-400 font-semibold mb-1">Email</h3>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">{userData?.email}</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none border-t dark:border-gray-700 pt-8 mt-8">
                        <h2 className="text-xl font-bold mb-4 text-red-600">Danger Zone</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Deleting your account will remove all your data from our servers.</p>
                        <button
                            onClick={handleDeleteAccount}
                            disabled={loading}
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Deleting...' : 'Delete My Account'}
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
