import React from 'react';

export default function Newsletter() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="card bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-3">Join the Stride Club</h3>
                            <p className="text-purple-100">Get early access to drops, exclusive offers, and member-only benefits.</p>
                        </div>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-4 focus:ring-purple-300" required />
                            <button type="submit" className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
