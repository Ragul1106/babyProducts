import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../App.css";

import wipesImg from "../assets/images/Img-card-col.png";
import mamaMielImg from "../assets/images/Frame 1171275003.png";
import zibuyuImg from "../assets/images/Frame 1171275013.png";

const productData = [
  {
    id: 105,
    title: "wipes",
    images: [wipesImg],
    rating: 5,
    mrp: 1444,
    price: 1299,
  },
  {
    id: 201,
    title: "Mama Miel Baby",
    images: [mamaMielImg],
    rating: 5,
    mrp: 1444,
    price: 1299,
  },
  {
    id: 305,
    title: "Zibuyu",
    images: [zibuyuImg],
    rating: 5,
    mrp: 1444,
    price: 1299,
  },
];

const BestSellers = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">Best Sellers</h2>
      <p className="text-center text-xl md:text-2xl my-6 md:my-8">Our Most Loved Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {productData.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow border border-[#00b4d8] rounded-[20px] w-full max-w-[300px] mx-auto relative overflow-hidden min-h-[400px] flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 bg-[#00b4d8] px-3 py-1 rounded-br-xl text-xs md:text-base font-bold z-10">
              NEW
            </div>

            {product.images?.[0] && (
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-[220px] object-contain px-6 pt-10"
              />
            )}

            <div className="absolute bottom-[80px] right-3 z-50">
              <button
                onClick={() => navigate(`/checkout/${product.id}`)}
                className="bg-[#00b4d8] px-4 py-1 rounded-full cursor-pointer text-base md:text-lg font-semibold"
              >
                Buy
              </button>
            </div>

            {/* Bottom Info Box */}
            <div className="bg-[#b2e9fa] p-4 pt-2 clip-slant rounded-b-[20px] relative clip-bend">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg md:text-xl">{product.title}</h3>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-2 text-base md:text-xl">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className={i < product.rating ? "" : "text-white"} />
                ))}
              </div>

              {/* Price Info */}
              <div className="flex items-center gap-2 text-sm md:text-lg font-bold">
                <span className="line-through text-gray-500">MRP ₹{product.mrp}</span>
                <span className="text-black">Price ₹{product.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
