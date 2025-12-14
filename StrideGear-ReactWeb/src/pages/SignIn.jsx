import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <div className="flex-1 grid md:grid-cols-2 pt-16">
                {/* Left Side - Visual & Animation */}_
                <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-purple-900 text-white p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961d289?w=1000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    <div className="relative z-10 text-center">
                        <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl inline-block animate-bounce shadow-xl">
                            <span className="text-6xl">👟</span>
                        </div>
                        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Welcome Back!</h2>
                        <p className="text-purple-200 text-lg max-w-md mx-auto">
                            Ready to step up your game? Sign in to access your exclusive offers and saved styles.
                        </p>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 overflow-y-auto transition-colors duration-300">
                    <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="mb-8">
                            <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-purple-600 transition-colors mb-8 dark:text-gray-400 dark:hover:text-purple-400">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h1>
                            <p className="text-gray-600 dark:text-gray-400">Please enter your details.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember for 30 days</label>
                                </div>
                                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 text-sm">Forgot password?</a>
                            </div>

                            <div className="space-y-4">
                                <button type="submit" className="w-full btn-primary py-3 flex items-center justify-center gap-2 group">
                                    Log In
                                </button>

                                <button type="button" className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                                        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.219 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.712 34.464 42 30.028 42 24c0-1.341-.138-2.65-.389-3.917z" />
                                    </svg>
                                    Log in with Google
                                </button>
                                {/* I'm removing Apple button from SignIn to match Source closely, since Source only had Google. 
                                    Wait, my previous thought was "better to be consistent".
                                    But "pixel perfect to source" usually implies I should mimic the source.
                                    Source SignIn has ONLY Google.
                                    Source SignUp has both.
                                    This is weird inconsistency in source, but I will mimic it if I want pixel perfection.
                                    I'll stick to just Google here to match source_signin.html EXACTLY.
                                */}
                            </div>
                        </form>

                        <div className="mt-8 text-center text-sm text-gray-600">
                            Don't have an account? {' '}
                            <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500 hover:underline">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
