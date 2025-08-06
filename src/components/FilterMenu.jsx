import React, { useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const FilterMenu = ({ selectedFilter, setSelectedFilter }) => {
  const [open, setOpen] = useState(false);

  const filters = [
    "Price(100-1000)",
    "Price(1000-1500)",
    "Price(1500-10000)",
    "Free Shipping(6)",
    "Discounts(6)",
  ];

  const handleSelect = (filter) => {
    setSelectedFilter(filter);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="border px-4 py-2 cursor-pointer rounded-md flex items-center gap-2"
      >
        Filter
        <HiAdjustmentsVertical
          className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded-md w-48 shadow-md z-10">
          <ul className="divide-y">
            {filters.map((item) => (
              <li
                key={item}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  selectedFilter === item ? "bg-gray-100 font-medium" : ""
                }`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
