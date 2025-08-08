import React  , { useEffect } from 'react';
import FeaturedCategories from '../components/FeaturedCategories';
import banner from '../assets/images/banner1.png';
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
      <BabyStroller />
      <FeedingBottle />
      <Pampers />
      <Testimonials />
      <FaqSection />
    </div>
  );
}

export default Home;
