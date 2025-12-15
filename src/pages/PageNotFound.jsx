import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function PageNotFound() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 pb-10">
                <div className="text-center px-4">
                    <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-6">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                        The page you're looking for seems to have gone for a run and hasn't come back yet.
                    </p>
                    <Link to="/" className="btn-primary inline-flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
