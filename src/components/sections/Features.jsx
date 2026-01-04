import React from 'react';

export default function Features() {
    return (
        <section className="section-padding bg-gray-50/50 relative overflow-hidden">
            <div className="blob -bottom-24 -left-24 opacity-20"></div>
            <div className="max-w-screen-xl mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <span className="badge-gradient mb-4">Our Services</span>
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                        Complete <span className="gradient-text">Software Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        From concept to deployment, we deliver innovative software solutions that drive your business forward.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="card text-center group rounded-3xl shadow-lg p-8">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            💻
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                        <p className="text-gray-600 leading-relaxed">Custom web applications built with modern technologies, responsive design, and scalable architecture.</p>
                    </div>

                    <div className="card text-center group rounded-3xl shadow-lg p-8">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            📱
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
                        <p className="text-gray-600 leading-relaxed">Native and cross-platform mobile applications for iOS and Android with intuitive user experiences.</p>
                    </div>

                    <div className="card text-center group rounded-3xl shadow-lg p-8">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            ☁️
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>
                        <p className="text-gray-600 leading-relaxed">Scalable cloud infrastructure, migration services, and DevOps solutions for modern businesses.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
