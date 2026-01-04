import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signup } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id === 'signup-email' ? 'email' : e.target.id === 'signup-password' ? 'password' : 'fullname']: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signup(formData.email, formData.password, formData.fullname);
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/50 transition-colors duration-300">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden pt-32 pb-20">
                <div className="blob top-0 left-0 opacity-20"></div>
                <div className="blob bottom-0 right-0 opacity-20" style={{ animationDelay: '-10s' }}></div>

                <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-[3rem] shadow-soft-xl border border-white overflow-hidden relative group">
                    {/* Left Side - Visual & Benefits */}
                    <div className="hidden md:flex flex-col justify-center p-16 bg-gradient-to-br from-[#7c3aed] to-[#db2777] text-white relative">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-white"></div>
                            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white"></div>
                        </div>

                        <div className="relative z-10 space-y-12">
                            <div>
                                <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black mb-6 uppercase tracking-widest">Join the Club</span>
                                <h1 className="text-6xl font-black leading-tight mb-6">Create Your <br />Account</h1>
                                <p className="text-xl text-purple-100 font-medium leading-relaxed">
                                    Join our community of innovators and get access to premium software solutions and expert support.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { text: "Priority Support", icon: "🚀", desc: "24/7 dedicated technical assistance" },
                                    { text: "Project Updates", icon: "🛡️", desc: "Real-time progress tracking and reports" },
                                    { text: "Exclusive Access", icon: "✨", desc: "Early access to new features and tools" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-center group/item hover:translate-x-2 transition-transform">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl shadow-xl">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black">{item.text}</h4>
                                            <p className="text-sm font-medium text-purple-100">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="flex flex-col justify-center p-10 md:p-16">
                        <div className="w-full max-w-sm mx-auto">
                            <div className="mb-12">
                                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Sign Up</h2>
                                <p className="text-gray-500 font-medium">Create your free account today.</p>
                            </div>

                            {error && <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100">{error}</div>}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label htmlFor="fullname" className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="w-full !rounded-2xl"
                                        placeholder="Muhammad Musta"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="signup-email" className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="signup-email"
                                        className="w-full !rounded-2xl"
                                        placeholder="you@example.com"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label htmlFor="signup-password" className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                                        <span className="text-[10px] font-black text-purple-300 uppercase tracking-widest">Min 8 chars</span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="signup-password"
                                            className="w-full !rounded-2xl pr-14"
                                            placeholder="••••••••"
                                            required
                                            minLength="8"
                                            onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-black text-purple-600 uppercase tracking-widest"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" disabled={loading} className="w-full btn-primary py-4 disabled:opacity-50 text-lg font-black uppercase tracking-wider group">
                                    {loading ? 'Processing...' : 'Create Account'}
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>

                            <div className="mt-12 text-center text-sm font-medium text-gray-500">
                                Already a member? {' '}
                                <Link to="/signin" className="text-purple-600 font-black hover:text-purple-800 transition-colors uppercase tracking-widest text-xs">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
