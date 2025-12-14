import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function FormPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'running',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a demo)');
        console.log(formData);
    };

    return (
        <>
            <Navbar />
            <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
                <div className="max-w-xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">General Inquiry</h1>
                        <p className="text-gray-600">Please fill out the form below and we'll get back to you.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                                        placeholder="Jane"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">Area of Interest</label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                                >
                                    <option value="running">Running Shoes</option>
                                    <option value="training">Training Gear</option>
                                    <option value="lifestyle">Lifestyle & Casual</option>
                                    <option value="corporate">Corporate Partnerships</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full btn-primary py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                                >
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
