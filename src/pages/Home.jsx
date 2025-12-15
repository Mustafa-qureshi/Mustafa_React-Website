import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import NewArrivals from '../components/sections/NewArrivals';
import ShippingFAQ from '../components/sections/ShippingFAQ';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import Footer from '../components/layout/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <NewArrivals />
                <ShippingFAQ />
                <Testimonials />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}
