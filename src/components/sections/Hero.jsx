import React, { useState } from 'react';

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden relative">
            <div className="blob -top-24 -left-24"></div>
            <div className="blob bottom-0 -right-24" style={{ animationDelay: '-5s' }}></div>

            <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative">
                <div className="space-y-8 fade-in">
                    <span className="badge-gradient">New Drop 2025</span>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                        Stride X: <br />
                        <span className="gradient-text">Engineered for Speed</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                        Lightweight knit upper, responsive midsole, and sustainable materials — built for every stride you take.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <a href="#new-arrivals" className="btn-primary text-lg">Explore Collection</a>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="btn-secondary text-lg"
                        >
                            Watch Video
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8">
                        <div className="card text-center p-6 bg-white/50 backdrop-blur-sm border-white">
                            <div className="text-4xl font-bold gradient-text">4.9</div>
                            <div className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wider">Rating</div>
                        </div>
                        <div className="card text-center p-6 bg-white/50 backdrop-blur-sm border-white">
                            <div className="text-4xl font-bold gradient-text">24k+</div>
                            <div className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wider">Sold</div>
                        </div>
                        <div className="card text-center p-6 bg-white/50 backdrop-blur-sm border-white">
                            <div className="text-4xl font-bold gradient-text">Free</div>
                            <div className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wider">Returns</div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="card max-w-lg mx-auto product-card overflow-hidden !p-0 border-white shadow-soft-xl group">
                        <div className="relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop" alt="Stride X Carbon Edition" className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700" />
                            <span className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                BESTSELLER
                            </span>
                            <button type="button" className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:scale-110 transition-all text-gray-900">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900">Stride X</h3>
                                    <p className="text-gray-500 font-medium">Carbon Edition • Performance</p>
                                </div>
                                <span className="text-3xl font-bold gradient-text">$139</span>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-900 border-4 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                                <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                                <div className="w-10 h-10 rounded-full bg-red-600 border-4 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                            </div>

                            <div className="flex gap-4">
                                <button className="btn-primary flex-1 py-4 text-lg">Add to Cart</button>
                                <button className="btn-secondary px-6 group-hover:border-purple-200">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Floating accents */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-100 rounded-full -z-10 blur-2xl"></div>
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
