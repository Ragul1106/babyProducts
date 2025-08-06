import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import babyproducts from '../assets/images/baby-products.webp';

const BulkPurchase = () => {
    useEffect(() => {
        document.title = 'Bulk Purchase & Corporate Gifts | Earthbuds';
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-24 py-12 font-poppins">
            <h1 className="text-3xl md:text-4xl font-bold text-[#32add2] mb-4">
                Bulk Purchase & Corporate Gifts
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                Looking to order eco-friendly baby products in bulk for a corporate event, baby shower, hospital gift package, or charity? Earthbuds offers curated gift sets and custom packages for every occasion – all made with love and care for both baby and the planet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <img
                    src={babyproducts}
                    alt="Bulk baby products"
                    className="w-full h-auto  rounded-xl "
                />

                <ul className="text-base text-gray-800 space-y-4">
                    <li>🎁 Customizable baby gift sets</li>
                    <li>🏷️ Branded packaging for corporate identity</li>
                    <li>📦 Eco-conscious packaging with personal notes</li>
                    <li>🚚 Reliable and timely delivery options</li>
                    <li>💬 Dedicated support for bulk queries</li>
                </ul>
            </div>

            <div className="mt-12 bg-[#b0e4f4] p-6 rounded-lg shadow-inner max-w-3xl">
                <h2 className="text-2xl font-semibold text-black mb-3">Interested in a bulk order?</h2>
                <p className="text-gray-700 mb-4">
                    Tell us more about your requirements, and our team will get in touch with a custom quote and suggestions.
                </p>
                <Link to="/contact" className="bg-[#03181e] text-white px-4 py-2 rounded-md hover:text-[#faf8f8] cursor-pointer">
                    contact
                </Link>
            </div>
        </div>
    );
};

export default BulkPurchase;
