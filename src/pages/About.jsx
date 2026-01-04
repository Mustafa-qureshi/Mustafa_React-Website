import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function About() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What technologies do you specialize in?",
            answer: "We specialize in modern web technologies including React, Node.js, Python, cloud platforms like AWS and Azure, and mobile development with React Native and Flutter.",
            id: 1
        },
        {
            question: "How do you ensure project quality?",
            answer: "We follow agile methodologies, conduct thorough testing, code reviews, and maintain high standards with continuous integration and deployment practices.",
            id: 2
        },
        {
            question: "Do you provide ongoing maintenance?",
            answer: "Yes! We offer comprehensive maintenance packages including security updates, performance optimization, and feature enhancements to keep your applications current.",
            id: 3
        }
    ];

    return (
        <>
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="pt-48 pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                    <div className="blob -top-24 -left-24 opacity-30"></div>
                    <div className="blob bottom-0 -right-24 opacity-20" style={{ animationDelay: '-8s' }}></div>

                    <div className="max-w-screen-xl mx-auto px-4 text-center relative">
                        <span className="badge-gradient mb-8">Our Story</span>
                        <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-10 leading-none tracking-tighter">
                            About <span className="gradient-text">CodeCraft</span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                            We build innovative software solutions that transform businesses. From startups to enterprises, we deliver cutting-edge technology with expertise and passion.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="section-padding bg-white relative">
                    <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 relative">
                        <div className="card !p-16 relative overflow-hidden group border-white shadow-soft-xl">
                            <div className="absolute -top-10 -right-10 opacity-[0.03] text-[15rem] group-hover:scale-110 transition-transform font-black">🎯</div>
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-5xl mb-10 shadow-2xl shadow-blue-200/50">
                                🎯
                            </div>
                            <h3 className="text-4xl font-black mb-6 text-gray-900">Our Mission</h3>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                To empower businesses with innovative software solutions that drive growth and efficiency. We believe in creating technology that makes a real difference in people's lives.
                            </p>
                        </div>

                        <div className="card !p-16 relative overflow-hidden group border-white shadow-soft-xl">
                            <div className="absolute -top-10 -right-10 opacity-[0.03] text-[15rem] group-hover:scale-110 transition-transform font-black">🚀</div>
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-5xl mb-10 shadow-2xl shadow-purple-200/50">
                                🚀
                            </div>
                            <h3 className="text-4xl font-black mb-6 text-gray-900">Our Vision</h3>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                To be the leading software development partner for businesses worldwide. We're building a future where technology seamlessly integrates with business goals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline Stats */}
                <section className="section-padding bg-gray-50/30">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className="text-center mb-24">
                            <span className="badge-gradient mb-4">Milestones</span>
                            <h2 className="text-6xl font-black text-gray-900">Our Journey</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-10">
                            {[
                                { year: "2015", label: "Founded", desc: "Started with a vision to revolutionize software development" },
                                { year: "200+", label: "Projects", desc: "Successful deliveries across various industries" },
                                { year: "50+", label: "Clients", desc: "Trusted partners worldwide" },
                                { year: "5.0", label: "Rating", desc: "From satisfied client feedback" }
                            ].map((stat, idx) => (
                                <div key={idx} className="card text-center !p-12 bg-white border-white hover:scale-105">
                                    <div className="text-6xl font-black gradient-text mb-6 leading-none">{stat.year}</div>
                                    <div className="text-2xl font-black text-gray-900 mb-4">{stat.label}</div>
                                    <p className="text-gray-500 leading-relaxed font-medium text-lg">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="section-padding bg-white">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className="text-center mb-24">
                            <span className="badge-gradient mb-6">The Creators</span>
                            <h2 className="text-6xl font-black text-gray-900 mb-8 leading-tight">Meet Our Team</h2>
                            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                                The passionate people behind every innovation
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16">
                            {[
                                { name: "Muhammad Mustafa", role: "Lead Developer", emoji: "💻", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", color: "blue" },
                                { name: "Sarah Johnson", role: "Tech Architect", emoji: "⚡", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", color: "purple" },
                                { name: "Ayesha", role: "UI/UX Designer", emoji: "🎨", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", color: "green" }
                            ].map((member, idx) => (
                                <div key={idx} className="card text-center group !p-12 border-white relative">
                                    <div className="relative mb-10 inline-block">
                                        <div className={`absolute -inset-4 bg-${member.color}-400 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                                        <img src={member.img} alt={member.name} className="relative mx-auto rounded-[3rem] h-60 w-60 object-cover border-[12px] border-gray-50 shadow-2xl transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-2" />
                                        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 border border-gray-100">
                                            {member.emoji}
                                        </div>
                                    </div>
                                    <h4 className="text-3xl font-black mb-3 text-gray-900">{member.name}</h4>
                                    <p className="text-blue-600 font-black mb-6 uppercase tracking-[0.2em] text-sm">{member.role}</p>
                                    <p className="text-gray-500 leading-relaxed font-medium text-lg">Building innovative solutions and leading development teams with expertise.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center text-4xl backdrop-blur-sm">
                                    🚀
                                </div>
                                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                                <p className="text-gray-400">Staying ahead of technology trends and implementing cutting-edge solutions.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center text-4xl backdrop-blur-sm">
                                    🎯
                                </div>
                                <h3 className="text-xl font-bold mb-3">Quality Driven</h3>
                                <p className="text-gray-400">Delivering robust, scalable, and maintainable code that stands the test of time.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center text-4xl backdrop-blur-sm">
                                    🤝
                                </div>
                                <h3 className="text-xl font-bold mb-3">Client Focused</h3>
                                <p className="text-gray-400">Understanding your business needs and delivering solutions that drive real results.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Accordion */}
                <section className="section-padding bg-white">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                        <div id="faq-accordion">
                            {faqs.map((item, index) => (
                                <div key={item.id}>
                                    <h2>
                                        <button
                                            type="button"
                                            className={`flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 hover:bg-gray-50 ${openIndex === index ? 'text-gray-900' : 'text-gray-500'}`}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span>{item.question}</span>
                                            <svg className={`w-3 h-3 shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 10 6">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div className={`${openIndex === index ? 'block' : 'hidden'}`}>
                                        <div className="py-5 border-b border-gray-200">
                                            <p className="text-gray-600">{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Customer Stories</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <blockquote className="card">
                                <div className="flex items-center mb-4">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Alex" className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <div className="flex text-yellow-400 mb-1">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="font-semibold text-gray-900">Alex Thompson</p>
                                    </div>
                                </div>
                                <p className="italic text-gray-600">"CodeCraft transformed our outdated system into a modern, efficient platform. Their expertise in React and Node.js delivered exactly what we needed."</p>
                            </blockquote>

                            <blockquote className="card">
                                <div className="flex items-center mb-4">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Lisa" className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <div className="flex text-yellow-400 mb-1">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="font-semibold text-gray-900">Lisa Chen</p>
                                    </div>
                                </div>
                                <p className="italic text-gray-600">"The mobile app they built for us exceeded all expectations. Great communication, timely delivery, and outstanding quality. Highly recommended!"</p>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
                            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                            <p className="text-blue-100 mb-6 text-lg">
                                Let's discuss how we can help bring your software vision to life. Get in touch for a free consultation.
                            </p>
                            <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-3">Subscribe for Updates</h3>
                            <p className="text-gray-400 text-lg">Get the latest tech insights, project updates, and industry news</p>
                        </div>
                        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-4 focus:ring-purple-500 outline-none" required />
                            <button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform text-white">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
