import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { currentUser, userData, isAdmin, signOut } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSignOut = async () => {
        console.log('Navbar: handleSignOut called');
        alert('Sign out from navbar clicked'); // Temporary
        try {
            await signOut();
            console.log('Navbar: signOut successful, navigating to /');
            navigate('/');
        } catch (err) {
            console.error('Navbar sign out error:', err);
        }
    };

    const isActive = (path) => {
        return location.pathname === path ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600';
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                        CC
                    </div>
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 group-hover:text-blue-600 transition-colors">
                        CodeCraft
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <Link to="/" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/')}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/about')}`}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/contact')}`}>Contact</Link>
                        </li>
                        {currentUser && (
                            <li>
                                <Link to="/projects" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/projects')}`}>Projects</Link>
                            </li>
                        )}
                        {isAdmin && (
                            <li>
                                <Link to="/admin" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/admin')}`}>Admin</Link>
                            </li>
                        )}
                    </ul>

                    <div className="flex items-center gap-4">
                        {currentUser ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-700">Hi, {userData?.fullname || 'User'}</span>
                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors shadow-md"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link to="/signin" className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors">Sign In</Link>
                                <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">Sign Up</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Mobile Menu Dropdown */}
                <div className={`items-center justify-between w-full md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-y-2">
                        <li><Link to="/" className="block py-2 pl-3 pr-4 rounded" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" className="block py-2 pl-3 pr-4 rounded" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                        <li><Link to="/contact" className="block py-2 pl-3 pr-4 rounded" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                        {currentUser && <li><Link to="/projects" className="block py-2 pl-3 pr-4 rounded" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>}
                        {currentUser ? (
                            <>
                                {isAdmin && <li><Link to="/admin" className="block py-2 pl-3 pr-4 rounded" onClick={() => setIsMobileMenuOpen(false)}>Admin</Link></li>}
                                <li className="border-t border-gray-200 pt-2"><button onClick={handleSignOut} className="block w-full text-left py-2 pl-3 pr-4 text-red-600 font-bold rounded">Sign Out</button></li>
                            </>
                        ) : (
                            <>
                                <li className="border-t border-gray-200 pt-2"><Link to="/signin" className="block py-2 pl-3 pr-4 rounded" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link></li>
                                <li><Link to="/signup" className="block py-2 pl-3 pr-4 text-purple-600 font-bold rounded" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
