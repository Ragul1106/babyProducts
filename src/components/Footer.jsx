import React from "react";
import { Link } from "react-router-dom";


const Footer = () => (
  <footer className="bg-[#b0e4f4] py-6 text-sm  text-gray-700">
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-20">

      <div>
        <h4 className="font-bold mb-2  relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          KNOW
        </h4>
        <ul className="mt-4 space-y-2  text-left">
          <li>
            <Link to="/about" className="hover:text-[#faf8f8] cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/about-store" className="hover:text-[#faf8f8] cursor-pointer">
              About Earthbubs Store
            </Link>
          </li>
          <li>
            <Link to="/bulk-purchase" className="hover:text-[#faf8f8] cursor-pointer">
              Bulk Purchase & Corporate Gifts
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          TERMS & CONDITIONS
        </h4>
        <ul className="mt-4 space-y-2 text-left">
          <li>
            <Link to="/shipping" className="hover:text-[#faf8f8] cursor-pointer">
              Shipping & Return Policies
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-[#faf8f8] cursor-pointer">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-[#faf8f8] cursor-pointer">
              FAQ'S
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          CONTACT US
        </h4>
        <ul className="mt-4 space-y-2 text-left">
          {/* <Link to="/contact" className="hover:text-[#faf8f8]"> */}
          <li className="space-y-2">
            For Sale: Earthbubs@co.in
          </li>
          <li>
            Call: +91 1234567890
          </li>
          <li>
            For Complaints: 1800 202 2222
          </li>
          <li>
            Chat Time: Mon to Sat from 9AM to 8PM
          </li>
          <li>
            For Complaints: Ebcustomercare.com
          </li>
          {/* </Link> */}
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2 relative inline-block after:block after:w-50 after:border-t-2 after:border-gray-500 after:mt-1">
          FOLLOW US
        </h4>
        <div className="mt-4 flex gap-4 text-xl">
          <a
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#faf8f8]"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#faf8f8]"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#faf8f8]"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

    </div>

    <hr className="border-gray-900 my-4 mx-20" />
    <p className="text-center">&copy; 2025 All Rights Reserved.</p>
  </footer>
);

export default Footer;
