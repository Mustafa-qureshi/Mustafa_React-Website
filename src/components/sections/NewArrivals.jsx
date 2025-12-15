import React from 'react';

export default function NewArrivals() {
    const products = [
        {
            id: 1,
            name: "Velocity V2",
            description: "Energy-return midsole",
            price: "$139",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "AeroFlex Pro",
            description: "Ultra-light performance",
            price: "$149",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Classic Essential",
            description: "Timeless everyday comfort",
            price: "$119",
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop"
        }
    ];

    return (
        <section id="new-arrivals" className="section-padding bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>

                    <section className="flex gap-3">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                            <option>Sort: Popular</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </section>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <article key={product.id} className="card product-card">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{product.description}</p>
                                    </div>
                                    <span className="text-2xl font-bold gradient-text">{product.price}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="btn-primary flex-1">Add to Cart</button>
                                    <button className="btn-secondary px-4">Info</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
