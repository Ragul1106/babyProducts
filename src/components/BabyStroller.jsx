import React from 'react';
import { Link } from "react-router-dom";
import stroll from '../assets/images/6-baby-stroller-pram-easy-to-fold-with-umbrella-fold-canopy-6-to-original-imagrsfrskubmszc 1.png'
import arrow from "../assets/images/leftarrow.png";
const BabyStroller = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-center text-4xl font-bold mb-4">
        Trending Products
      </h2>
      <h2 className="text-center text-2xl font-medium text-gray-700 mb-4">
        Parent Favorites, Baby Approved
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-20 max-w-8xl mx-auto my-20">

        <div className="w-full lg:w-1/2">
          <img
            src={stroll}
            alt="Baby Stroller"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:text-left">
          <h3 className="text-5xl font-bold text-gray-900 mb-4">Baby Stroller</h3>
          <p className="text-black mb-6 leading-relaxed text-2xl">
            Explore the world in comfort with our smooth and stylish baby stroller.
            Designed for safety, ease, and flexibility perfect for every little
            adventure. Lightweight, foldable, and parent-friendly for life on the go.
          </p>
          <Link to="/stroller">
            <button className="bg-[#b0e4f4] text-2xl cursor-pointer text-gray-600 font-semibold py-2 px-6 rounded-full hover:bg-[#20e4f6] transition flex items-center gap-2">
              Buy Now
              <img src={arrow} alt="arrow" className="w-5 h-5" />
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default BabyStroller;
