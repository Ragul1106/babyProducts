import React, { useState } from "react";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonials = [
  testimonial1, testimonial2, testimonial3,
  testimonial3, testimonial2, testimonial1,
  testimonial2, testimonial1, testimonial3,
  testimonial3, testimonial1, testimonial2,
  testimonial1, testimonial2, testimonial3
];

const Testimonials = () => {
  const totalSlides = 5;
  const [currentIndex, setCurrentIndex] = useState(Math.floor(totalSlides / 2));
  const itemsPerSlide = 3;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Customer Testimonials</h2>
      <p className="text-2xl font-semibold my-8">Parent Favorites, Baby Approved</p>

      <div className="overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const start = slideIndex * itemsPerSlide;
            const end = start + itemsPerSlide;
            return (
              <div
                key={slideIndex}
                className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
              >
                {testimonials.slice(start, end).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Testimonial ${start + idx + 1}`}
                    className="w-[90%] mx-auto h-auto rounded-xl mt-5"
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-7">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const distance = Math.abs(currentIndex - index);
          let size = "w-2 h-2";
          if (distance === 0) size = "w-4 h-4";
          else if (distance === 1) size = "w-2 h-2";

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${size} rounded-full transition-all duration-300 ${currentIndex === index ? "bg-[#28729c] border-2" : "bg-[#4b93bc]"
                }`}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
