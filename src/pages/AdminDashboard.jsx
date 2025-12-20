import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
    const { userData } = useAuth();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back, {userData?.fullname}</p>
                        </div>
                        <div className="flex gap-4">
                            <Link to="/form" className="btn-primary px-6 py-2">Manage All Records</Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                            <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Role</h3>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white capitalize">{userData?.role}</p>
                        </div>
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                            <h3 className="text-blue-600 dark:text-blue-400 font-semibold mb-1">Account Status</h3>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">Active</p>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                            <h3 className="text-green-600 dark:text-green-400 font-semibold mb-1">Access Level</h3>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">Full Admin</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                            <li>Review all pending inquiries in the <Link to="/form" className="text-purple-600 hover:underline">Form Page</Link>.</li>
                            <li>Monitor user registration and roles.</li>
                            <li>System management tools (coming soon).</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
