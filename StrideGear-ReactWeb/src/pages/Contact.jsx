import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Contact() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
                    <div className="max-w-screen-xl mx-auto px-4 text-center">
                        <div className="inline-block mb-6 animate-bounce">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-3xl shadow-2xl">
                                💬
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 fade-in-up">
                            Get <span className="gradient-text">Help & Support</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Questions about orders, returns, or product details? Reach out and we'll reply within 24 hours.
                        </p>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="section-padding bg-white">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="card text-center group hover:scale-105 transition-transform">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                                    📧
                                </div>
                                <h4 className="text-xl font-bold mb-2">Email Us</h4>
                                <p className="text-gray-600 mb-3">We typically respond within 24 hours</p>
                                <a href="mailto:help@stridegear.com" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                                    help@stridegear.com
                                </a>
                            </div>

                            <div className="card text-center group hover:scale-105 transition-transform">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                                    📞
                                </div>
                                <h4 className="text-xl font-bold mb-2">Call Us</h4>
                                <p className="text-gray-600 mb-3">Mon-Fri, 9am-6pm PKT</p>
                                <a href="tel:+923001234567" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                                    +92 300 1234567
                                </a>
                            </div>

                            <div className="card text-center group hover:scale-105 transition-transform">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                                    📍
                                </div>
                                <h4 className="text-xl font-bold mb-2">Visit Us</h4>
                                <p className="text-gray-600 mb-3">Our headquarters</p>
                                <p className="text-purple-600 font-semibold">
                                    StrideGear HQ<br />
                                    Karachi, Pakistan
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="card">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                                <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                            </div>

                            <form action="https://formspree.io/f/xvgwyojo" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="_replyto"
                                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        required
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="order">Order Inquiry</option>
                                        <option value="product">Product Question</option>
                                        <option value="shipping">Shipping & Delivery</option>
                                        <option value="return">Returns & Exchanges</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="order" className="block text-sm font-semibold text-gray-700 mb-2">
                                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        Order Number (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="order"
                                        name="order"
                                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="#12345"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Tell us how we can help you..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button type="submit" className="flex-1 btn-primary flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </button>
                                    <button type="reset" className="flex-1 btn-secondary">
                                        Reset Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Common Questions Accordion */}
                <section className="section-padding bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
                            <p className="text-xl text-gray-600">Find quick answers to frequently asked questions</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { question: "How do I track my order?", answer: "You'll receive a tracking number via email once your order ships. Click the link in the email or visit our tracking page and enter your order number to see real-time updates.", id: 1 },
                                { question: "How do I return an item?", answer: "Returns are free within 30 days. Simply pack the item in its original packaging, print the return label from your account, and drop it off at any courier service. Refunds are processed within 5-7 business days.", id: 2 },
                                { question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secure and encrypted.", id: 3 },
                                { question: "Do you offer international shipping?", answer: "Yes! We ship to over 50 countries worldwide. International shipping costs and delivery times vary by location. Check our shipping page for detailed information about your country.", id: 4 }
                            ].map((item, index) => (
                                <div key={item.id}>
                                    <h2>
                                        <button
                                            type="button"
                                            className={`flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 hover:bg-gray-50 px-4 ${openIndex === index ? 'text-gray-900' : 'text-gray-500'}`}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">{item.id}</span>
                                                {item.question}
                                            </span>
                                            <svg className={`w-3 h-3 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 10 6">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div className={`${openIndex === index ? 'block' : 'hidden'}`}>
                                        <div className="py-5 px-4 border-b border-gray-200">
                                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-bold mb-3">Need Faster Help?</h3>
                                <p className="text-purple-100 text-lg">Chat with our support team during business hours (9am-6pm PKT)</p>
                            </div>
                            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-3 shadow-2xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Start Live Chat
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
