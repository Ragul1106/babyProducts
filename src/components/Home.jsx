import React  , { useEffect } from 'react';
import FeaturedCategories from '../components/FeaturedCategories';
import banner from '../assets/images/banner1.png';
import dots from '../assets/images/dots.png';
import TrustSection from '../components/TrustSection';
import BabyStroller from '../components/BabyStroller';
import FeedingBottle from '../components/FeedingBottle';
import FaqSection from '../components/FaqSection';
import BestSellers from '../components/BestSellers';
import Pampers from '../components/Pampers';
import Testimonials from '../components/Testimonials';

function Home() {
   useEffect(() => {
          document.title = 'Home | Earthbubs';
      }, []);
  return (
    <div>
      <div className="w-full">
        <img src={banner} alt="banner" />
      </div>
      <FeaturedCategories />
      <TrustSection />
      <BestSellers />
      <div className="flex justify-center mx-auto mb-5 w-40">
        <img src={dots} alt="banner" />
      </div>
      <BabyStroller />
      <FeedingBottle />
      <Pampers />
      <Testimonials />
       <div className="flex justify-center mx-auto mb-5 w-40">
        <img src={dots} alt="banner" />
      </div>
      <FaqSection />
    </div>
  );
}

export default Home;
