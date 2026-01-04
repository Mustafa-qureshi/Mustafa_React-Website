import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { login, googleSignIn, resetPassword, currentUser } = useAuth();

    // Debug: alert when component mounts
    useEffect(() => {
        console.log('SignIn component mounted');
    }, []);

    useEffect(() => {
        if (currentUser) {
            console.log('User authenticated, redirecting to dashboard');
            navigate('/dashboard', { replace: true });
        }
    }, [currentUser, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        // Client-side validation
        if (!email.trim()) {
            setError('Email is required');
            setLoading(false);
            return;
        }
        if (!password.trim()) {
            setError('Password is required');
            setLoading(false);
            return;
        }

        try {
            await login(email, password);
            setMessage('Login successful!');
            // Redirect will happen via useEffect when currentUser changes
        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setMessage('');
        setLoading(true);
        try {
            await googleSignIn();
            setMessage('Google sign-in successful!');
            // Redirect will happen via useEffect when currentUser changes
        } catch (err) {
            console.error('Google sign-in error:', err);
            setError(err.message || 'Google sign-in failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email.trim()) {
            setError('Please enter your email first');
            return;
        }
        try {
            await resetPassword(email);
            setMessage('Password reset email sent!');
        } catch (err) {
            setError(err.message || 'Failed to send reset email');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/50">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden pt-32 pb-20">
                <div className="blob -top-24 -left-24 opacity-20"></div>
                <div className="blob bottom-0 -right-24 opacity-20"></div>

                <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-[3rem] shadow-soft-xl border border-white overflow-hidden relative group">
                    <div className="hidden md:flex flex-col justify-center p-16 bg-gradient-to-br from-[#7c3aed] to-[#db2777] text-white relative">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
                            <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white"></div>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-5xl font-black mb-8 leading-tight">Welcome <br />Back!</h2>
                            <p className="text-xl text-purple-100 font-medium leading-relaxed mb-10">
                                Ready to level up your development? Sign in to access your projects and development tools.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                                    ))}
                                </div>
                                <p className="text-sm font-bold text-white/80">Join 10k+ members</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-10 md:p-16">
                        <div className="w-full max-w-sm">
                            <div className="mb-10">
                                <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Login</h1>
                                <p className="text-gray-500 font-medium">Please enter your credentials.</p>
                            </div>

                            {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100">{error}</div>}
                            {message && <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-2xl text-sm font-bold border border-green-100">{message}</div>}

                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-2xl"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label htmlFor="password" className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                                        <button type="button" onClick={handleForgotPassword} className="text-xs font-black text-purple-600 hover:text-purple-800 uppercase tracking-widest">Forgot?</button>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            className="w-full rounded-2xl pr-14"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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

                                <button type="submit" disabled={loading} className="w-full btn-primary py-4 disabled:opacity-50 text-lg font-black uppercase tracking-wider">
                                    {loading ? 'Logging in...' : 'Log In'}
                                </button>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-2xl shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50"
                                    >
                                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                        Sign in with Google
                                    </button>
                                </div>
                            </div>

                            <div className="mt-10 text-center text-sm font-medium text-gray-500">
                                New here? {' '}
                                <Link to="/signup" className="text-purple-600 font-black hover:text-purple-800 transition-colors uppercase tracking-widest text-xs">Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
