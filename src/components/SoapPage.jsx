import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDropdown } from "../context/DropdownContext";
import Soapdata from "../data/Soap";
import FilterMenu from "../components/FilterMenu";
import '../App.css';

const Soap = ({ product }) => {
   useEffect(() => {
          document.title = 'Soaps | Earthbubs';
      }, []);
    const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/checkout/${product.id}`);
  };
  return (
    <div className="bg-white shadow-md border rounded-2xl w-[300px] relative overflow-hidden">
      <div className="absolute top-0 left-0 bg-cyan-500 text-black px-3 py-1 rounded-br-xl text-sm font-bold z-10">
        NEW
      </div>

      {product.images?.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-80 object-cover rounded-t-2xl py-10 px-6"
        />
      )}

      <div className="absolute bottom-[95px] right-2 z-50">
        <button
          onClick={handleBuyClick}
          className="bg-[#00b4d8] text-xs cursor-pointer sm:text-sm lg:text-base font-bold px-5 py-1 rounded-2xl shadow"
        >
          Buy
        </button>
      </div>

      <div className="relative bg-[#c8ebfb] p-4 pt-5 rounded-b-2xl clip-bend">
        <h2 className="font-bold text-lg mb-1">{product.title}</h2>

        <div className="flex text-yellow-400 mb-1">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={i < product.rating ? "" : "text-gray-300"}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-[#935e48] line-through font-bold">
            MRP ₹{product.mrp}
          </div>
          <div className="font-bold text-lg text-black">
            Price ₹{product.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

const SoapBox = ({ selectedFilter }) => {
  const getFilteredProducts = () => {
     const soapCol = Soapdata.filter((p) => p.id >= 401 && p.id <= 406);

    if (!selectedFilter) return soapCol;

    if (selectedFilter.includes("Price")) {
      const numbers = selectedFilter.match(/\d+/g);
      if (numbers && numbers.length === 2) {
        const [min, max] = numbers.map((num) => parseInt(num));
        return soapCol.filter((p) => p.price >= min && p.price <= max);
      }
      return soapCol;
    }

    if (selectedFilter.includes("Free Shipping")) {
      return soapCol.slice(0, 6);
    }

    if (selectedFilter.includes("Discounts")) {
      return soapCol.filter((p) => p.mrp > p.price);
    }

    return soapCol;
  };

  const filtered = getFilteredProducts();

  return (
    <div className="flex flex-wrap justify-center gap-20 my-10">
      {filtered.length > 0 ? (
        filtered.map((product) => <Soap key={product.id} product={product} />)
      ) : (
        <p className="text-gray-500">No products match the selected filter.</p>
      )}
    </div>
  );
};

const SoapList = () => {
  const { openDropdown } = useDropdown();
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-medium space-x-2">
          <Link to="/" className="hover:text-sky-500">
            Home
          </Link>{" "}
          <span>›</span>
          <span
            className="hover:text-sky-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              openDropdown("products");
            }}
          >
            Products ›
          </span>
          <span  >
            Baby Soap's
          </span>
        </div>
        <FilterMenu
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      <SoapBox selectedFilter={selectedFilter} />

      <div className="flex justify-center items-center space-x-2 mt-10">
        <button className="border p-2 rounded-md text-sm">
          <FaChevronLeft />
        </button>
        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <button
            key={page}
            className="border px-3 py-1 rounded-md text-sm"
          >
            {page}
          </button>
        ))}
        <button className="border p-2 rounded-md text-sm">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SoapList;
