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
            question: "Are your materials sustainable?",
            answer: "Yes! We use recycled polyester, organic cotton, and responsibly sourced rubber in our shoes. We're committed to reducing our environmental impact at every stage of production.",
            id: 1
        },
        {
            question: "Where are your shoes manufactured?",
            answer: "Our shoes are manufactured in certified facilities across Vietnam and Portugal, where we maintain strict quality control and fair labor practices.",
            id: 2
        },
        {
            question: "Do you offer custom designs?",
            answer: "We offer limited customization options on select models. Contact our team to discuss your custom design needs and minimum order quantities.",
            id: 3
        }
    ];

    return (
        <>
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="pt-48 pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
                    <div className="blob -top-24 -left-24 opacity-30"></div>
                    <div className="blob bottom-0 -right-24 opacity-20" style={{ animationDelay: '-8s' }}></div>

                    <div className="max-w-screen-xl mx-auto px-4 text-center relative">
                        <span className="badge-gradient mb-8">Our Story</span>
                        <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-10 leading-none tracking-tighter">
                            About <span className="gradient-text">StrideGear</span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                            We design premium sneakers that perform on the track, in the city, and in everyday life. Sustainable materials, innovative cushioning, and bold aesthetics define every pair.
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
                                To empower movement with sneakers that combine comfort, durability, and iconic design. We believe every step should feel effortless and every stride should inspire confidence.
                            </p>
                        </div>

                        <div className="card !p-16 relative overflow-hidden group border-white shadow-soft-xl">
                            <div className="absolute -top-10 -right-10 opacity-[0.03] text-[15rem] group-hover:scale-110 transition-transform font-black">🚀</div>
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-5xl mb-10 shadow-2xl shadow-purple-200/50">
                                🚀
                            </div>
                            <h3 className="text-4xl font-black mb-6 text-gray-900">Our Vision</h3>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                To be the most loved brand for those who value performance and style. We're building a future where sustainability meets innovation, creating footwear that's better for you and the planet.
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
                                { year: "2018", label: "Founded", desc: "Started in a small workshop with a big dream" },
                                { year: "150+", label: "Designs", desc: "Unique styles crafted with passion" },
                                { year: "50k+", label: "Customers", desc: "Across 50+ countries worldwide" },
                                { year: "4.9", label: "Rating", desc: "From verified customer reviews" }
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
                                The passionate people behind every stride
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16">
                            {[
                                { name: "Aisha Rahman", role: "Lead Designer", emoji: "✨", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", color: "purple" },
                                { name: "Daniel Chen", role: "Head of Tech", emoji: "⚡", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", color: "blue" },
                                { name: "Mina Park", role: "Sustainability", emoji: "🌱", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop", color: "green" }
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
                                    <p className="text-purple-600 font-black mb-6 uppercase tracking-[0.2em] text-sm">{member.role}</p>
                                    <p className="text-gray-500 leading-relaxed font-medium text-lg">Pioneering core technologies and designs that redefine footwear.</p>
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
                                    🌍
                                </div>
                                <h3 className="text-xl font-bold mb-3">Sustainability First</h3>
                                <p className="text-gray-400">Using recycled materials and responsible sourcing to minimize our environmental footprint.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center text-4xl backdrop-blur-sm">
                                    💡
                                </div>
                                <h3 className="text-xl font-bold mb-3">Innovation Always</h3>
                                <p className="text-gray-400">Constantly pushing boundaries with new technologies and design approaches.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center text-4xl backdrop-blur-sm">
                                    ❤️
                                </div>
                                <h3 className="text-xl font-bold mb-3">Customer Obsessed</h3>
                                <p className="text-gray-400">Every decision we make starts with understanding what you need and want.</p>
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
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Haris" className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <div className="flex text-yellow-400 mb-1">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="font-semibold text-gray-900">Haris Ahmed</p>
                                    </div>
                                </div>
                                <p className="italic text-gray-600">"Best running shoe I've ever owned. The cushioning is perfect and they're incredibly durable. I've put over 500km on mine and they still feel great!"</p>
                            </blockquote>

                            <blockquote className="card">
                                <div className="flex items-center mb-4">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Farah" className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <div className="flex text-yellow-400 mb-1">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="font-semibold text-gray-900">Farah Khan</p>
                                    </div>
                                </div>
                                <p className="italic text-gray-600">"Beautiful design and excellent support. I wear these everywhere - from the gym to brunch. The sustainability factor is a huge bonus too!"</p>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="card bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
                            <h3 className="text-3xl font-bold mb-4">Want to Collaborate?</h3>
                            <p className="text-purple-100 mb-6 text-lg">
                                We partner with creatives, athletes, and brands who share our vision. Let's create something amazing together.
                            </p>
                            <Link to="/contact" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-3">Subscribe for Drops</h3>
                            <p className="text-gray-400 text-lg">Get exclusive early access to new releases and behind-the-scenes content</p>
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
