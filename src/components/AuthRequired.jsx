import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

export default function AuthRequired() {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/50">
            <Navbar />
            <main className="flex-1 flex items-center justify-center p-6 pt-32 pb-20 relative overflow-hidden">
                {/* Background Decor */}
                <div className="blob top-0 left-0 opacity-20 animate-pulse"></div>
                <div className="blob bottom-0 right-0 opacity-20" style={{ animationDelay: '-5s' }}></div>

                <div className="max-w-2xl w-full text-center relative z-10">
                    <div className="mb-12 relative inline-block group">
                        {/* Animated Lock Icon */}
                        <div className="w-32 h-32 bg-white rounded-4xl shadow-soft-xl flex items-center justify-center mx-auto mb-8 border border-white group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-16 h-16 text-purple-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animationDuration: '3s' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        {/* Subtle Ring Animation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-purple-200 rounded-full animate-ping opacity-20 pointer-events-none" style={{ animationDuration: '4s' }}></div>
                    </div>

                    <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Access <span className="gradient-text">Locked</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-medium mb-12 max-w-sm mx-auto leading-relaxed">
                        This section contains premium gear and exclusive collections. Please sign in to unlock your access.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link
                            to="/signin"
                            state={{ from: location }}
                            className="btn-primary w-full sm:w-auto px-10 py-5 text-xl font-black uppercase tracking-wider shadow-lg hover:shadow-purple-200 transition-all flex items-center justify-center gap-3 group"
                        >
                            Sign In
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link
                            to="/signup"
                            state={{ from: location }}
                            className="btn-secondary w-full sm:w-auto px-10 py-5 text-xl font-black uppercase tracking-wider flex items-center justify-center gap-3 group border-2"
                        >
                            Create Account
                        </Link>
                    </div>

                    <div className="mt-16 flex justify-center gap-8 border-t border-gray-100 pt-10">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl">🔒</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Secure</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl">👟</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Premium</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl">⚡</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Instant Access</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
