import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <div className="flex-1 grid md:grid-cols-2 pt-16">
                {/* Left Side - Visual & Benefits */}
                <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-12 relative overflow-hidden">
                    {/* Background pattern if needed, or keeping the clean gradient from source */}
                    <div className="relative z-10 w-full max-w-lg">
                        <div className="inline-block mb-4">
                            <span className="badge-gradient">Join the Club</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Create Your <br />
                            <span className="gradient-text">StrideGear Account</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Join thousands of satisfied customers and get access to exclusive drops, member-only discounts, and early release notifications.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-6">
                            {[
                                {
                                    text: "Early Access to Drops",
                                    desc: "Be the first to shop new releases and limited editions",
                                    color: "from-green-500 to-emerald-500"
                                },
                                {
                                    text: "Free Shipping on First Order",
                                    desc: "Get free delivery on your first purchase as a welcome gift",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                {
                                    text: "Members-Only Discounts",
                                    desc: "Enjoy exclusive deals and special pricing on select items",
                                    color: "from-purple-500 to-pink-500"
                                },
                                {
                                    text: "Easy Order Tracking",
                                    desc: "Track all your orders and manage returns effortlessly",
                                    color: "from-orange-500 to-red-500"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg text-white`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{item.text}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 flex items-center gap-8 flex-wrap">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">50k+</div>
                                <div className="text-sm text-gray-600">Happy Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">4.9</div>
                                <div className="text-sm text-gray-600">Average Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">150+</div>
                                <div className="text-sm text-gray-600">Products</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 overflow-y-auto transition-colors duration-300">
                    <div className="w-full max-w-md">
                        <div className="card p-8 md:p-10 border border-gray-100 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 rounded-2xl">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg">
                                    🎉
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get Started Today</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">Create your free account in minutes</p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            id="fullname"
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="Abdul Saboor"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="signup-email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            id="signup-email"
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="signup-password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="signup-password"
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="Create a strong password"
                                            required
                                            minLength="8"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
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
                                    <p className="mt-2 text-xs text-gray-500">Must be at least 8 characters long</p>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300"
                                            required
                                        />
                                    </div>
                                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                                        I agree to the <a href="#" className="font-medium text-purple-600 hover:underline">Terms and Conditions</a>
                                    </label>
                                </div>

                                {/* Buttons */}
                                <div className="space-y-4 pt-2">
                                    <button type="submit" className="w-full btn-primary py-3">
                                        Create Account
                                    </button>

                                    <div className="relative flex items-center justify-center">
                                        <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                                        <span className="relative bg-white px-4 text-sm text-gray-500">
                                            Or sign up with
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <button type="button" className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                            </svg>
                                            Google
                                        </button>
                                        <button type="button" className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.012 15.388c-.538 0-.95-.006-1.542.013-.484.013-.95.026-1.344.026-.85 0-1.78-.11-2.646-.3-1.012-.23-1.903-.6-2.64-1.076a4.495 4.495 0 0 1-1.254-1.226c-.53-.8-.8-1.74-.8-2.748 0-1.12.33-2.14.98-2.98.65-.84 1.48-1.27 2.47-1.34.8-.05 1.63-.05 2.43-.05.66 0 1.2.01 1.63.02.43.01.76.02 1.03.02.83 0 1.74-.11 2.58-.3 1.03-.23 1.91-.6 2.64-1.05.2-.12.38-.25.56-.4.18-.15.33-.3.45-.45l.1.1c-.08.08-.18.17-.28.28-.1.11-.2.22-.32.33-.5.5-.98.9-1.44 1.18-.46.28-.9.48-1.34.6s-.88.24-1.34.3a4.1 4.1 0 0 0-1.18.08c-.56.03-1.18.04-1.88.04-.6 0-1.1-.01-1.5-.02-.4-.01-.7-.02-1.03-.02s-.6.01-.9.02c-.3.01-.58.02-.8.05a.8.8 0 0 0-.3.08c-.1.03-.18.08-.2.13-.04.05-.06.1-.06.18 0 .08.02.15.05.23.03.08.08.14.15.2.07.06.15.1.25.13.1.03.2.05.3.06.38.1.78.15 1.18.15.6 0 1.1-.01 1.5-.02.4-.01.7-.02 1.03-.02s.6.01.9.02c.3.01.58.02.8.05.1.02.2.05.3.08.1.03.18.08.2.13.04.05.06.1.06.18 0 .08-.02.15-.05.23-.03.08-.08.14-.15.2-.07.06-.15.1-.25.13-.1.03-.2.05-.3.06-.4.1-.8.15-1.2.15-.22 0-.44-.01-.66-.02a5.4 5.4 0 0 1-.66-.02c-.22 0-.44-.01-.66-.02-.22 0-.44-.01-.66-.02zm1.61-4.77c.1-.38.16-.76.16-1.14 0-.5-.1-1-.28-1.48-.18-.48-.44-.88-.78-1.2-.34-.32-.76-.48-1.25-.48-.5 0-.95.1-1.35.3-.4.2-.75.48-1.03.82-.3.34-.5.75-.63 1.23-.13.48-.2 1-.2 1.52 0 .42.06.84.18 1.26.12.42.3.78.53 1.1.23.32.53.58.88.78.35.2.75.3 1.2.3.48 0 .9-.1 1.28-.3.38-.2.7-.47 1.03-.8.3-.35.5-.75.63-1.2zM20.9 16.19a4.8 4.8 0 0 1-.95 1.9c-.4.54-.86.98-1.38 1.32-.52.34-1.08.56-1.68.66-.6.1-1.2.1-1.8.1-.36 0-.75-.02-1.18-.05-.43-.03-.86-.08-1.3-.15-.44-.07-.88-.16-1.3-.28-.42-.12-.83-.26-1.2-.42a6.3 6.3 0 0 1-1.08-.58c-.34-.2-.68-.42-1-.65-.3-.23-.6-.48-.88-.75-.27-.27-.53-.56-.75-.87-.22-.31-.42-.63-.6-.97-.18-.34-.33-.7-.45-1.05-.12-.35-.22-.7-.3-1.05-.08-.35-.13-.7-.16-1.04a5.5 5.5 0 0 1-.1-1.06c0-.36.03-.72.08-1.08.05-.36.13-.72.23-1.08.1-.36.23-.7.38-1.02.15-.32.33-.63.53-.9.2-.27.42-.53.68-.75.26-.22.53-.42.82-.6.29-.18.6-.34.9-.48.3-.14.6-.26.9-.36.3-.1.6-.18.9-.25.08-.02.17-.04.25-.06.08-.02.17-.04.25-.06.17-.04.34-.08.5-.1.17-.02.34-.05.5-.06.3-.03.6-.05.9-.06.3-.01.6-.01.9-.01.6 0 1.2.05 1.78.13.58.08 1.1.26 1.58.5.48.24.9.55 1.25.9s.64.76.85 1.2c.2.44.33.9.38 1.36.05.46.08.92.08 1.38 0 .5-.05.98-.13 1.45-.08.47-.2.9-.38 1.3-.18.4-.4.76-.68 1.1a2.9 2.9 0 0 1-.6.68z" />
                                            </svg>
                                            Apple
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <p className="text-center text-sm text-gray-600 mt-6">
                                Already have an account?{' '}
                                <Link to="/signin" className="font-medium text-purple-600 hover:underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer variant="simple" />
        </div>
    );
}
