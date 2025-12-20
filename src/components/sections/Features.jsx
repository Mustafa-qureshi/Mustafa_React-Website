import React from 'react';

export default function Features() {
    return (
        <section className="section-padding bg-gray-50/50 relative overflow-hidden">
            <div className="blob -bottom-24 -left-24 opacity-20"></div>
            <div className="max-w-screen-xl mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <span className="badge-gradient mb-4">Core Benefits</span>
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                        Why Choose <span className="gradient-text">StrideGear</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Engineered with precision, designed with passion, and built to last through every adventure.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="card text-center group rounded-3xl shadow-lg p-8">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            🏃
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Lightweight Design</h3>
                        <p className="text-gray-600 leading-relaxed">Engineered for performance and comfort, every stride feels effortless and natural.</p>
                    </div>

                    <div className="card text-center group rounded-3xl shadow-lg p-8">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            ⚡
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Energy Boost</h3>
                        <p className="text-gray-600 leading-relaxed">Responsive sole technology that gives you a spring in every step you take.</p>
                    </div>

                    <div className="card text-center group rounded-3xl shadow-lg p-8">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            🛡️
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Durability</h3>
                        <p className="text-gray-600 leading-relaxed">Built with high-grade materials to last through every adventure life throws at you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
