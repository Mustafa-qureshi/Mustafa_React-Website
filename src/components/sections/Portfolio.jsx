import React from 'react';

export default function NewArrivals() {
    const projects = [
        {
            id: 1,
            name: "E-Commerce Platform",
            description: "Full-stack online store with payment integration",
            tech: "React, Node.js, MongoDB",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Healthcare App",
            description: "Mobile app for patient management",
            tech: "React Native, Firebase",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "FinTech Dashboard",
            description: "Real-time financial analytics platform",
            tech: "Vue.js, Python, PostgreSQL",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
        }
    ];

    return (
        <section id="portfolio" className="section-padding bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>

                    <section className="flex gap-3">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>Filter: All</option>
                            <option>Web Apps</option>
                            <option>Mobile Apps</option>
                            <option>Cloud Solutions</option>
                        </select>
                    </section>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <article key={project.id} className="card product-card">
                            <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                                        <p className="text-sm text-gray-500">{project.description}</p>
                                        <p className="text-xs text-blue-600 font-medium">{project.tech}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="btn-primary flex-1">View Details</button>
                                    <button className="btn-secondary px-4">Live Demo</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
