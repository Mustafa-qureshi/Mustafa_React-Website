import React from 'react';

export default function Features() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="gradient-text">StrideGear</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Engineered with precision, designed with passion, and built to last
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl">
                            🏃
                        </div>
                        <h3 className="text-xl font-bold mb-3">Lightweight Design</h3>
                        <p className="text-gray-600">Engineered for performance and comfort, every stride feels effortless and natural.</p>
                    </div>

                    <div className="card text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl">
                            ⚡
                        </div>
                        <h3 className="text-xl font-bold mb-3">Energy Boost</h3>
                        <p className="text-gray-600">Responsive sole technology that gives you a spring in every step you take.</p>
                    </div>

                    <div className="card text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl">
                            🛡️
                        </div>
                        <h3 className="text-xl font-bold mb-3">Durability</h3>
                        <p className="text-gray-600">Built with high-grade materials to last through every adventure life throws at you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
