import React, { useState } from 'react';

export default function ShippingFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How long does shipping take?",
            answer: "Standard shipping takes 3–7 business days. Express options are available at checkout for faster delivery."
        },
        {
            question: "What is your return policy?",
            answer: "We offer free returns within 30 days of purchase. Items must be unworn and in original packaging."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes! We ship to over 50 countries worldwide. International shipping times vary by location."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Shipping & Returns</h2>

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
