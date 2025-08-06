import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaUserMd, FaHeart, FaGlobe, FaSmile } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const AboutUsSection = () => {
    useEffect(() => {
              document.title = 'About Us | Earthbuds';
          }, []);
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-lg font-medium space-x-2">
        <Link to="/" className="hover:text-sky-500">Home</Link>
        <span>›</span>
        <span className="">About Us</span>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-20">

        <div className="flex-shrink-0 flex flex-col mt-10 items-center sm:items-start">
          <img
            src={logo}
            alt="EarthBubs Logo"
            className="w-60 h-60 object-cover mb-2"
          />
          <h2 className="text-2xl font-semibold mx-10">EarthBubs</h2>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-black text-xl mb-6 leading-relaxed">
            At EarthBubs, we believe that every baby deserves the safest, softest start in life.
            That’s why we’re dedicated to offering high quality, trusted baby products that combine
            comfort, care, and innovation all wrapped in love. Born from a parent's desire for
            gentle, safe, and natural baby essentials, our journey began with one goal: to make
            parenting a little easier, and a lot more joyful. From soft diapers and skin-loving
            care to smart strollers and feeding must-haves, every product we offer is thoughtfully
            chosen and thoroughly tested for your baby’s well being. We’re more than just a store
            — we’re part of your parenting journey.
          </p>

          <h4 className="text-xl font-semibold mb-4">What Makes Us Different:</h4>
          <ul className="space-y-3 text-xl">

            <li className="flex items-start gap-2">
              {/* <FaLeaf className="text-green-600 mt-1" /> */}
              🌿
              <span>Natural, safe, and toxin-free ingredients</span>
            </li>
            <li className="flex items-start gap-2">
              {/* <FaUserMd className="text-red-500 mt-1" /> */}
              🛡️
              <span>Pediatrician & dermatologist approved</span>
            </li>
            <li className="flex items-start gap-2">
              {/* <FaHeart className="text-pink-500 mt-1" /> */}
              👶
              <span>Designed with real parents in mind</span>
            </li>
            <li className="flex items-start gap-2">
              {/* <FaGlobe className="text-blue-500 mt-1" /> */}
              🌎
              <span>Eco-conscious and cruelty-free practices</span>
            </li>
            <li className="flex items-start gap-2">
              {/* <FaSmile className="text-yellow-500 mt-1" /> */}
              ❤
              <span>10,000+ happy families and growing!</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
