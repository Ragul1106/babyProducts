import React from "react";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Customer Testimonials</h2>
      <p className="text-2xl font-semibold my-8">Parent Favorites, Baby Approved</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto mt-20">
        <img
          src={testimonial1}
          alt="Testimonial 1"
          className="w-[90%] mx-auto h-auto rounded-xl mt-5"
        />
        <img
          src={testimonial2}
          alt="Testimonial 2"
          className="w-[90%] mx-auto h-auto rounded-xl "
        />
        <img
          src={testimonial3}
          alt="Testimonial 3"
          className="w-[90%] mx-auto h-auto rounded-xl mt-5 "
        />
      </div>
    </section>
  );
};

export default Testimonials;
