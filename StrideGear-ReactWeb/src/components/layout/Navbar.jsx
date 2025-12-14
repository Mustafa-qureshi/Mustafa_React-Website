import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return location.pathname === path ? 'text-purple-600 font-bold' : 'text-gray-700 hover:text-purple-600';
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                        SG
                    </div>
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 group-hover:text-purple-600 transition-colors">
                        StrideGear
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <Link to="/" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/')}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/about')}`}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/contact')}`}>Contact</Link>
                        </li>
                        <li>
                            <Link to="/form" className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition-colors ${isActive('/form')}`}>Form</Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            )}
                        </button>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-2">
                            <Link to="/signin" className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors">Sign In</Link>
                            <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">Sign Up</Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky"
                    aria-expanded={isMobileMenuOpen}
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
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded" aria-current="page" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        </li>
                        <li>
                            <Link to="/form" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Form</Link>
                        </li>
                        <li className="border-t border-gray-200 pt-2 mt-2">
                            <Link to="/signin" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="block py-2 pl-3 pr-4 text-purple-600 font-bold rounded hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
