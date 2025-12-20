import React from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "The fit is perfect and the midsole gives me the energy I need for my daily runs. Best purchase this year!",
            author: "Sam R.",
            role: "Marathon Runner"
        },
        {
            quote: "Stylish enough for the city and comfortable enough for all-day wear. I get compliments everywhere!",
            author: "Lina M.",
            role: "Fashion Blogger"
        },
        {
            quote: "Great customer service and fast delivery. The quality exceeded my expectations!",
            author: "Omar K.",
            role: "Fitness Coach"
        }
    ];

    const StarIcon = () => (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    return (
        <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
            <div className="blob -top-24 -right-24 opacity-20"></div>
            <div className="max-w-screen-xl mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <span className="badge-gradient mb-4">Reviews</span>
                    <h2 className="text-5xl font-black text-gray-900 mb-6">What Our <span className="gradient-text">Stride Club</span> Says</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {testimonials.map((t, i) => (
                        <blockquote key={i} className="card !p-10 border-white relative group shadow-soft-xl rounded-[2.5rem]">
                            <div className="absolute top-6 right-8 text-6xl text-purple-100 font-serif opacity-50">"</div>
                            <div className="flex items-center mb-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, index) => <StarIcon key={index} />)}
                                </div>
                            </div>
                            <p className="text-xl font-medium text-gray-700 mb-8 leading-relaxed">"{t.quote}"</p>
                            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center font-bold text-purple-600">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-black text-gray-900 leading-none mb-1 text-lg">{t.author}</p>
                                    <p className="text-sm font-bold text-purple-600 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
