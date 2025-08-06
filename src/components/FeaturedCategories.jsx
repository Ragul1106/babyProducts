import React from "react";
import { Link } from "react-router-dom";
import fc1 from "../assets/images/fc1.png";
import fc2 from "../assets/images/fc2.png";
import fc3 from "../assets/images/fc3.png";
import fc4 from "../assets/images/fc4.png";
import soapImg from "../assets/images/baby_soap.png";

const FeaturedCategories = () => {
  const images = [
    { img: fc1, link: "/pampers" },
    { img: fc2, link: "/girls-fashion" },
    { img: fc3, link: "/soap" },
    { img: fc4, link: "/stroller" },
  ];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Everything Your Baby Needs
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {images.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="relative flex justify-center items-center min-h-60 w-full lg:w-auto"
          >
            <img
              src={item.img}
              alt={`fc${index + 1}`}
              className="w-60 h-auto object-contain"
            />

            {index === 2 && (
              <img
                src={soapImg}
                alt="Soap"
                className="absolute bottom-23 w-54 h-auto object-contain z-10"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
