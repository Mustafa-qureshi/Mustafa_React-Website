import React, { useState } from 'react';

export default function ShippingFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during consultation."
        },
        {
            question: "What technologies do you work with?",
            answer: "We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS and Azure. We choose the best tools for each project."
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes! We offer comprehensive maintenance and support packages to keep your applications running smoothly and up-to-date with the latest security standards."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                <div data-accordion="collapse">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h2>
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 hover:bg-gray-50 ${openIndex === index ? 'text-gray-900' : 'text-gray-500'}`}
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{faq.question}</span>
                                    <svg className={`w-3 h-3 shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 10 6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div className={`${openIndex === index ? 'block' : 'hidden'}`}>
                                <div className="py-5 border-b border-gray-200">
                                    <p className="text-gray-500">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
