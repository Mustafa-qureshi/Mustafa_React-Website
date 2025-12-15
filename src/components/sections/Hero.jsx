import React, { useState } from 'react';

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 fade-in-up">
                    <span className="badge-gradient">New Drop 2025</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Stride X: <br />
                        <span className="gradient-text">Engineered for Speed</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Lightweight knit upper, responsive midsole, and sustainable materials — built for every stride you take.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#new-arrivals" className="btn-primary">Explore Collection</a>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="btn-secondary"
                        >
                            Watch Video
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6">
                        <div className="card text-center">
                            <div className="text-3xl font-bold gradient-text">4.9</div>
                            <div className="text-sm text-gray-500 mt-1">Avg Rating</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-3xl font-bold gradient-text">24k+</div>
                            <div className="text-sm text-gray-500 mt-1">Pairs Sold</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-3xl font-bold gradient-text">Free</div>
                            <div className="text-sm text-gray-500 mt-1">Returns</div>
                        </div>
                    </div>
                </div>

                <div className="relative float-animation">
                    <div className="card max-w-md mx-auto product-card overflow-hidden">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop" alt="Stride X Carbon Edition" className="w-full h-80 object-cover rounded-lg" />
                            <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                BESTSELLER
                            </span>
                            <button type="button" className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Stride X — Carbon Edition</h3>
                            <p className="text-gray-600">Responsive foam sole • Knit upper • Eco midsole</p>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold gradient-text">$139</span>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full bg-gray-900 hover:scale-110 transition-transform"></button>
                                    <button className="w-10 h-10 rounded-full bg-blue-600 hover:scale-110 transition-transform"></button>
                                    <button className="w-10 h-10 rounded-full bg-red-600 hover:scale-110 transition-transform"></button>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="btn-primary flex-1">Add to Cart</button>
                                <button className="btn-secondary px-6">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div id="video-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex bg-black/50 backdrop-blur-sm">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-2xl shadow-2xl">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900">Stride X Overview</h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    onClick={() => setIsVideoOpen(false)}
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 14 14">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                        <p className="text-lg font-semibold">Video Coming Soon</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">Watch the complete product overview and see Stride X in action. Experience the innovation that makes every step count.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
