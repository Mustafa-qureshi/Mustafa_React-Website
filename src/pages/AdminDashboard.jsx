import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
    const { userData } = useAuth();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/50">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 pt-32 pb-20 relative overflow-hidden">
                <div className="blob top-0 left-0 opacity-20"></div>
                <div className="blob bottom-0 right-0 opacity-20" style={{ animationDelay: '-10s' }}></div>

                <div className="bg-white rounded-[3rem] shadow-soft-xl p-10 md:p-16 border border-white relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        <div>
                            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">Internal System</span>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Admin Dashboard</h1>
                            <p className="text-gray-500 font-medium mt-2">Welcome back, <span className="text-purple-600">{userData?.fullname}</span></p>
                        </div>
                        <Link to="/form" className="btn-primary px-8 py-4 text-lg font-black uppercase tracking-wider shadow-lg hover:shadow-purple-200 transition-all">
                            Manage All Records
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="p-8 bg-purple-50 rounded-[2rem] border border-purple-100 flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                            <h3 className="text-purple-600 font-black text-xs uppercase tracking-widest mb-4">Current Role</h3>
                            <p className="text-3xl font-black text-gray-900 capitalize">{userData?.role}</p>
                        </div>
                        <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100 flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                            <h3 className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4">Account Status</h3>
                            <p className="text-3xl font-black text-gray-900">Active</p>
                        </div>
                        <div className="p-8 bg-green-50 rounded-[2rem] border border-green-100 flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                            <h3 className="text-green-600 font-black text-xs uppercase tracking-widest mb-4">Access Level</h3>
                            <p className="text-3xl font-black text-gray-900">Full System</p>
                        </div>
                    </div>

                    <div className="bg-gray-50/50 rounded-[2rem] p-10 border border-gray-100">
                        <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">System Control Panel</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Link to="/form" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-sm transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📋</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Manage Records</h4>
                                    <p className="text-xs text-gray-500 font-medium">Review all user submissions</p>
                                </div>
                            </Link>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-gray-100 opacity-60 cursor-not-allowed">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center text-xl">👤</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">User Management</h4>
                                    <p className="text-xs text-gray-500 font-medium">Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
