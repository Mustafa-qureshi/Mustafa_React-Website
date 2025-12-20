import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { auth, db, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setMessage('');
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (!userDoc.exists()) {
                await setDoc(doc(db, "users", user.uid), {
                    fullname: user.displayName,
                    email: user.email,
                    role: "user",
                    createdAt: new Date()
                });
            }
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setError('Please enter your email first.');
            return;
        }
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent! Check your inbox.');
            setError('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
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
                                Ready to step up your game? Sign in to access your exclusive offers and saved styles.
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
                                        className="w-full !rounded-2xl"
                                        placeholder="name@company.com"
                                        required
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
                                            className="w-full !rounded-2xl pr-14"
                                            placeholder="••••••••"
                                            required
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

                                <div className="relative flex items-center py-4">
                                    <div className="flex-grow border-t border-gray-100"></div>
                                    <span className="flex-shrink mx-4 text-xs font-black text-gray-300 uppercase tracking-widest">OR</span>
                                    <div className="flex-grow border-t border-gray-100"></div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleGoogleSignIn}
                                    disabled={loading}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-gray-100 rounded-2xl bg-white text-sm font-black text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                                        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.219 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.712 34.464 42 30.028 42 24c0-1.341-.138-2.65-.389-3.917z" />
                                    </svg>
                                    Google Login
                                </button>
                            </form>

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
