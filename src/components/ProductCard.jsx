import React from "react";
import { FaStar } from "react-icons/fa";
import '../App.css'; 
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white shadow-md border rounded-2xl w-[300px] relative overflow-hidden min-h-[400px]">

      {/* NEW Tag */}
      <div className="absolute top-0 left-0 bg-cyan-500 px-3 py-1 rounded-br-xl text-xs sm:text-sm lg:text-base font-bold z-10">
        NEW
      </div>

      {/* Product Image */}
      {product.images?.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-80 object-cover rounded-t-2xl py-10 px-6"
        />
      )}

      {/* Buy Now Button */}
      <div className="absolute bottom-[95px] right-2 z-50">
        <button 
          onClick={handleBuyClick} 
          className="bg-[#00b4d8] text-xs sm:text-sm lg:text-base font-bold px-5 py-1 rounded-2xl shadow"
        >
          Buy
        </button>
      </div>

      {/* Bottom Info Box */}
      <div className="relative bg-[#c8ebfb] p-4 pt-5 rounded-b-2xl clip-bend">
        {/* Title */}
        <h2 className="font-bold text-base sm:text-lg lg:text-2xl mb-1">{product.title}</h2>

        {/* Rating */}
        <div className="flex text-yellow-200 my-2 text-sm sm:text-base lg:text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={i < product.rating ? "" : "text-white"}
            />
          ))}
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-4">
          <div className="text-xs sm:text-sm lg:text-base text-gray-600 line-through font-bold">
            MRP ₹{product.mrp}
          </div>
          <div className="font-bold text-sm sm:text-base lg:text-lg text-black">
            Price ₹{product.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
