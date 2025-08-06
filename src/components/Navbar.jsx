import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDropdown } from "../context/DropdownContext";
import { CartContext } from "../context/CartContext";
import logo from "../assets/images/logo.png";
import addToCart from "../assets/images/addToCart.png";
import Cart from "../assets/images/cart1.png";
import login from "../assets/images/login.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const { activeDropdown, openDropdown } = useDropdown();
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [showProducts, setShowProducts] = useState(false);
  const { cartItems } = useContext(CartContext);
 

  const isCartPage = location.pathname === "/cart";

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleDropdownItemClick = () => {
    openDropdown(null);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/products") {
      openDropdown("products");
    } else {
      openDropdown(null);
    }
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        openDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <header className="bg-white shadow sticky top-0 z-70">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link
          to="/"
          className="text-sky-500 text-xl font-bold flex items-center gap-1"
        >
          <img src={logo} className="h-8" alt="Logo" />
          EarthBubs
        </Link>



        <nav className="hidden md:flex gap-6 text-gray-700 font-medium relative">
          <Link to="/" className="hover:text-sky-500">Home</Link>

          <div className="relative" ref={dropdownRef}>
            <div className="relative group">
              <button
                onClick={() => openDropdown("products")}
                className="hover:text-sky-500 cursor-pointer"
              >
                Products
              </button>

              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  {["pampers", "boys-fashion", "girls-fashion", "soap", "stroller", "bottle"].map((item) => (
                    <Link
                      to={`/${item}`}
                      key={item}
                      className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                      onClick={handleDropdownItemClick}
                    >
                      {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link to="/offers" className="hover:text-sky-500">Offers</Link>
          <Link to="/about" className="hover:text-sky-500">About</Link>
          <Link to="/contact" className="hover:text-sky-500">Contacts</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 rounded-md border-[#b0e4fe] py-2 pl-3 pr-8 w-full focus:outline-none text-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-sky-500">
              🔍
            </button>
          </div>

          <Link to="/cart" className="relative">
            <img
              src={isCartPage ? Cart : addToCart}
              className="w-8"
              alt="Cart"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>


          <button>
            <Link
              to="/login"
              className="text-sky-500 text-xl font-bold flex items-center gap-1"
            >
              <img src={login} className="w-8" alt="login" />
            </Link>
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-600"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <hr />

      {menuOpen && (
        <nav className="md:hidden bg-white px-6 py-4 border-t space-y-3 text-gray-700">
          <Link to="/" className="block" onClick={toggleMenu}>Home</Link>
          <details className="group">
            <summary className="cursor-pointer">Products</summary>
            <div className="pl-4 mt-2">
              {["pampers", "boys-fashion", "girls-fashion", "soap", "stroller", "bottle"].map((item) => (
                <Link
                  to={`/${item}`}
                  key={item}
                  className="block py-1"
                  onClick={handleDropdownItemClick}
                >
                  {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              ))}
            </div>
          </details>
          <Link to="/offers" className="block" onClick={toggleMenu}>Offers</Link>
          <Link to="/about" className="block" onClick={toggleMenu}>About</Link>
          <Link to="/contacts" className="block" onClick={toggleMenu}>Contacts</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
