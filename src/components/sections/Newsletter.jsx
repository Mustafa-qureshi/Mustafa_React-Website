import React from 'react';

export default function Newsletter() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="blob bottom-0 right-0 opacity-10"></div>
            <div className="max-w-5xl mx-auto px-4 relative">
                <div className="card !p-0 overflow-hidden bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white border-none shadow-soft-xl">
                    <div className="grid md:grid-cols-2 gap-0 items-center">
                        <div className="p-12 md:p-16">
                            <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">Stay Updated</span>
                            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Tech <br />Insights</h3>
                            <p className="text-blue-100 text-lg leading-relaxed font-medium">Get the latest in software development trends, project updates, and exclusive industry insights.</p>
                        </div>
                        <div className="p-12 md:p-16 bg-white/5 backdrop-blur-sm h-full flex items-center border-l border-white/10">
                            <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Enter your email" className="w-full px-8 py-5 rounded-[2rem] text-gray-900 bg-white border-none focus:ring-8 focus:ring-blue-200/30 transition-all text-lg font-medium shadow-inner" required />
                                <button type="submit" className="w-full bg-white text-blue-600 px-8 py-5 rounded-[2rem] font-black hover:bg-gray-50 hover:scale-[1.02] transition-all shadow-2xl text-lg uppercase tracking-wider">
                                    Subscribe Now
                                </button>
                                <p className="text-sm text-blue-200 text-center mt-6 font-medium">Weekly insights, no spam. Unsubscribe anytime.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
