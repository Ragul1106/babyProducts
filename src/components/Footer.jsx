// import React from "react";
// import { Link } from "react-router-dom";


// const Footer = () => (
//   <footer className="bg-[#b0e4f4] py-6 text-sm  text-gray-700">
//     <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-20">

//       <div>
//         <h4 className="font-bold mb-2  relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
//           KNOW
//         </h4>
//         <ul className="mt-4 space-y-2  text-left">
//           <li>
//             <Link to="/about" className="hover:text-[#faf8f8] cursor-pointer">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/about-store" className="hover:text-[#faf8f8] cursor-pointer">
//               About Earthbubs Store
//             </Link>
//           </li>
//           <li>
//             <Link to="/bulk-purchase" className="hover:text-[#faf8f8] cursor-pointer">
//               Bulk Purchase & Corporate Gifts
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div>
//         <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
//           TERMS & CONDITIONS
//         </h4>
//         <ul className="mt-4 space-y-2 text-left">
//           <li>
//             <Link to="/shipping" className="hover:text-[#faf8f8] cursor-pointer">
//               Shipping & Return Policies
//             </Link>
//           </li>
//           <li>
//             <Link to="/privacy-policy" className="hover:text-[#faf8f8] cursor-pointer">
//               Privacy Policy
//             </Link>
//           </li>
//           <li>
//             <Link to="/faq" className="hover:text-[#faf8f8] cursor-pointer">
//               FAQ'S
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div>
//         <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
//           CONTACT US
//         </h4>
//         <ul className="mt-4 space-y-2 text-left">
//           {/* <Link to="/contact" className="hover:text-[#faf8f8]"> */}
//           <li className="space-y-2">
//             For Sale: Earthbubs@co.in
//           </li>
//           <li>
//             Call: +91 1234567890
//           </li>
//           <li>
//             For Complaints: 1800 202 2222
//           </li>
//           <li>
//             Chat Time: Mon to Sat from 9AM to 8PM
//           </li>
//           <li>
//             For Complaints: Ebcustomercare.com
//           </li>
//           {/* </Link> */}
//         </ul>
//       </div>

//       <div>
//         <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
//           FOLLOW US
//         </h4>
//         <div className="mt-4 flex gap-4 text-xl">
//           <a
//             href="https://www.instagram.com/accounts/login/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#faf8f8]"
//           >
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a
//             href="https://www.facebook.com/login/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#faf8f8]"
//           >
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a
//             href="https://twitter.com/i/flow/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#faf8f8]"
//           >
//             <i className="fab fa-twitter"></i>
//           </a>
//         </div>
//       </div>

//     </div>

//     <hr className="border-gray-900 my-4 mx-20" />
//     <p className="text-center">&copy; 2025 All Rights Reserved.</p>
//   </footer>
// );

// export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#b5e6f3] text-black  text-sm md:text-base">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="uppercase font-semibold border-b border-black pb-1 mb-3">Know</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-[#faf8f8]">About Us</Link>
            </li>
            <li>
              <Link to="/about-store" className="hover:text-[#faf8f8]">About Earthbubs Store</Link>
            </li>
            <li>
              <Link to="/bulk-purchase" className="hover:text-[#faf8f8]">Bulk Purchase & Corporate Gifts</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase font-semibold border-b border-black pb-1 mb-3">Terms & Conditions</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/shipping" className="hover:text-[#faf8f8]">Shipping & Return Policies</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#faf8f8]">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#faf8f8]">FAQ’s</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase font-semibold border-b border-black pb-1 mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>For Sale: <a href="mailto:Earthbubs@co.in" className="hover:underline">Earthbubs@co.in</a></li>
            <li>Call: <a href="tel:+911234567890" className="hover:underline">+91 1234567890</a></li>
            <li>For Complaints: <a href="tel:18002022222" className="hover:underline">1800 202 2222</a></li>
            <li>
              Chat Time: Our Team is Available<br />
              From Monday to Saturday from<br />
              9.00AM to 8.00PM
            </li>
            <li className="inline-flex flex-row items-center gap-2 whitespace-nowrap">
              For Complaints:
              <a href="mailto:Ebcustomercare.com" className="hover:underline break-all">
                Ebcustomercare.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase font-semibold border-b border-gray-500 pb-1 mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-lg hover:text-[#faf8f8] transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-lg hover:text-[#faf8f8] transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-lg hover:text-[#faf8f8] transition" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-900 mx-4 md:mx-12" />

      <div className="text-center py-4 text-gray-700 text-sm md:text-base">
        Copyright © 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
