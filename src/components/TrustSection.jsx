import React from "react";
import trust1 from "../assets/images/trust1.png";
import trust2 from "../assets/images/trust2.png";
import trust3 from "../assets/images/trust3.png";
import trust4 from "../assets/images/trust4.png";
import trust5 from "../assets/images/trust5.png";

const TrustSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Why Parents Trust Us</h2>
      <p className="font-semibold text-lg md:text-2xl my-8">Designed with Love. Backed by Science.</p>

      <div className="flex flex-wrap justify-center gap-6">
        {[trust1, trust2, trust3, trust4, trust5].map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={img}
              alt={`trust${index + 1}`}
              className="w-50 h-auto object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
