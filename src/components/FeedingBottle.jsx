import React from 'react';
import { Link } from "react-router-dom";
import feedingBottleImg from '../assets/images/image 13.png';
import arrow from "../assets/images/leftarrow.png";
const FeedingBottle = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-6 py-10 lg:py-20 bg-white max-w-7xl mx-auto gap-y-10 lg:gap-x-20">

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Feeding Bottle</h1>
        <p className="text-2xl text-black mb-6">
          The baby feeding bottle is made from 100% BPA-free, safe materials.
          Its soft silicone nipple feels natural and gentle on the baby’s mouth.
          The anti-colic design helps reduce gas and fussiness during feeding.
          It’s lightweight, easy to hold, and perfect for everyday use.
        </p>
        <Link to="/bottle">
          <button className="bg-[#b0e4f4] text-2xl cursor-pointer text-gray-600 font-semibold py-2 px-6 rounded-full hover:bg-[#20e4f6] transition flex items-center gap-2">
            Buy Now
            <img src={arrow} alt="arrow" className="w-5 h-5" />
          </button>
        </Link>
      </div>

      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <img
          src={feedingBottleImg}
          alt="Feeding Bottle"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default FeedingBottle;
