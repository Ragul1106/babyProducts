import React, { useEffect } from 'react';
import babyproduct from '../assets/images/logo.png';

const AboutEarthBuds = () => {
      useEffect(() => {
                document.title = 'About | Earthbubs';
            }, []);
  return (
    <div className="bg-pink-50 py-16 px-6 sm:px-10 lg:px-24 font-[Poppins]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-800 mb-6">
          About Earthbuds 🌱
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold text-pink-700">Earthbuds</span>, your trusted companion on the beautiful journey of parenthood. 
          We provide safe, sustainable, and gentle products for your little ones — with love for both your baby and the Earth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              At Earthbuds, we carefully select baby essentials like organic clothing, eco-friendly diapers, 
              chemical-free bath items, and more — all crafted with your baby’s safety and comfort in mind.
            </p>
            <p>
              We are proud to support responsible parenting through products that are:
            </p>
            <ul className="list-disc pl-6 text-pink-700 font-medium">
              <li>Baby-safe & dermatologist approved</li>
              <li>Eco-conscious & sustainably packaged</li>
              <li>Soft, breathable, and organic materials</li>
              <li>Tested and loved by real moms</li>
            </ul>
            <p>
              Earthbuds isn’t just a store — it’s a growing community of mindful parents who want the best 
              for their children and the planet.
            </p>
            <p className="font-semibold text-pink-800">
              Thank you for being part of our journey. Let’s grow together 💚
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={babyproduct} 
              alt="Happy baby with eco-friendly products"
              className="rounded-2xl  w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEarthBuds;
