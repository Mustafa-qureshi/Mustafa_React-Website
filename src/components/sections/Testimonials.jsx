import React from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "The fit is perfect and the midsole gives me the energy I need for my daily runs. Best purchase this year!",
            author: "Sam R."
        },
        {
            quote: "Stylish enough for the city and comfortable enough for all-day wear. I get compliments everywhere!",
            author: "Lina M."
        },
        {
            quote: "Great customer service and fast delivery. The quality exceeded my expectations!",
            author: "Omar K."
        }
    ];

    const StarIcon = () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    return (
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <blockquote key={i} className="card">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, index) => <StarIcon key={index} />)}
                                </div>
                            </div>
                            <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
                            <p className="font-semibold text-gray-900">— {t.author}</p>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
