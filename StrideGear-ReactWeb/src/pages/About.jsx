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
                <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
                    <div className="max-w-screen-xl mx-auto px-4 text-center">
                        <span className="badge-gradient mb-4 inline-block">Our Story</span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                            About <span className="gradient-text">StrideGear</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We design premium sneakers that perform on the track, in the city, and in everyday life. Sustainable materials, innovative cushioning, and bold aesthetics define every pair.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="section-padding bg-white">
                    <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                        <div className="card hover:scale-105 transition-transform">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl mb-4">
                                🎯
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To empower movement with sneakers that combine comfort, durability, and iconic design. We believe every step should feel effortless and every stride should inspire confidence.
                            </p>
                        </div>

                        <div className="card hover:scale-105 transition-transform">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl mb-4">
                                🚀
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most loved brand for those who value performance and style. We're building a future where sustainability meets innovation, creating footwear that's better for you and the planet.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline Stats */}
                <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="card text-center hover:scale-105 transition-transform">
                                <div className="text-4xl font-bold gradient-text mb-2">2018</div>
                                <div className="text-gray-600 font-medium">Founded</div>
                                <p className="text-sm text-gray-500 mt-2">Started in a small workshop with a big dream</p>
                            </div>

                            <div className="card text-center hover:scale-105 transition-transform">
                                <div className="text-4xl font-bold gradient-text mb-2">150+</div>
                                <div className="text-gray-600 font-medium">Designs</div>
                                <p className="text-sm text-gray-500 mt-2">Unique styles crafted with passion</p>
                            </div>

                            <div className="card text-center hover:scale-105 transition-transform">
                                <div className="text-4xl font-bold gradient-text mb-2">50k+</div>
                                <div className="text-gray-600 font-medium">Happy Customers</div>
                                <p className="text-sm text-gray-500 mt-2">Across 50+ countries worldwide</p>
                            </div>

                            <div className="card text-center hover:scale-105 transition-transform">
                                <div className="text-4xl font-bold gradient-text mb-2">4.9</div>
                                <div className="text-gray-600 font-medium">Average Rating</div>
                                <p className="text-sm text-gray-500 mt-2">From verified customer reviews</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="section-padding bg-white">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The passionate people behind every stride
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="card text-center group">
                                <div className="relative mb-4 inline-block">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop" alt="Aisha" className="mx-auto rounded-full h-32 w-32 object-cover border-4 border-purple-200 group-hover:border-purple-400 transition-colors" />
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                                        ✨
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-1">Aisha Rahman</h4>
                                <p className="text-purple-600 font-semibold mb-3">Lead Designer</p>
                                <p className="text-gray-600 text-sm">10+ years creating iconic sneaker designs that blend style with function.</p>
                            </div>

                            <div className="card text-center group">
                                <div className="relative mb-4 inline-block">
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" alt="Daniel" className="mx-auto rounded-full h-32 w-32 object-cover border-4 border-blue-200 group-hover:border-blue-400 transition-colors" />
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                                        ⚡
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-1">Daniel Chen</h4>
                                <p className="text-blue-600 font-semibold mb-3">Head of Performance</p>
                                <p className="text-gray-600 text-sm">Former athlete bringing cutting-edge technology to every shoe.</p>
                            </div>

                            <div className="card text-center group">
                                <div className="relative mb-4 inline-block">
                                    <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=300&fit=crop" alt="Mina" className="mx-auto rounded-full h-32 w-32 object-cover border-4 border-green-200 group-hover:border-green-400 transition-colors" />
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                        🌱
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-1">Mina Park</h4>
                                <p className="text-green-600 font-semibold mb-3">Sustainability Lead</p>
                                <p className="text-gray-600 text-sm">Pioneering eco-friendly materials and ethical manufacturing practices.</p>
                            </div>
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
