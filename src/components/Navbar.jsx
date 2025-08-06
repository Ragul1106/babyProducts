import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDropdown } from "../context/DropdownContext";
import { CartContext } from "../context/CartContext";
import logo from "../assets/images/logo.png";
import addToCart from "../assets/images/addToCart.png";
import Cart from "../assets/images/cart1.png";
import login1 from "../assets/images/login1.png";
import login from "../assets/images/login.png";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const { activeDropdown, openDropdown } = useDropdown();
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const isCartPage = location.pathname === "/cart";
  const isLogin = location.pathname === "/login";

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

  const productRoutes = [
    { to: "/pampers", label: "Pampers" },
    { to: "/boys-fashion", label: "Boy's Fashions" },
    { to: "/girls-fashion", label: "Girl's Fashions" },
    { to: "/soap", label: "Soap" },
    { to: "/stroller", label: "Stroller" },
    { to: "/bottle", label: "Bottle" },
  ];

 const productPaths = [
  "/pampers",
  "/boys-fashion",
  "/girls-fashion",
  "/soap",
  "/stroller",
  "/bottle",
];

const isProductActive = productPaths.includes(location.pathname);

  const [query, setQuery] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const cleaned = query.trim().toLowerCase();

    const match = productRoutes.find(({ label }) =>
      label.toLowerCase().includes(cleaned)
    );

    if (match) {
      navigate(match.to);
      setQuery("");
    } else {
      setNotFoundMessage(
        "No results found."
      );

      setTimeout(() => setNotFoundMessage(""), 5000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };
  return (
    <header className="bg-white shadow sticky top-0 z-70">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link
          to="/"
          className="text-sky-500 text-xl font-bold flex items-center gap-1"
        >
          <img src={logo} className="h-8" alt="Logo" />
          EarthBubs
        </Link>



        <nav className="hidden md:flex gap-6 text-gray-700 font-medium relative">
          <Link
            to="/"
            className={`relative transition-all ${location.pathname === "/"
                ? "bg-gradient-to-b from-white to-[#b0e4f6] text-black rounded-t-md px-4 py-2 border-b-4 border-cyan-400"
                : ""
              }`}
          >
            Home
          </Link>


          <div className="relative" ref={dropdownRef}>
            <div className="relative group">
              <button
                onClick={() => openDropdown("products")}
                className={`relative transition-all cursor-pointer ${isProductActive
                ? "bg-gradient-to-b from-white to-[#b0e4f6] text-black cursor-pointer rounded-t-md px-4 py-2 border-b-4 border-cyan-400"
                : ""
              }`}
              >
                Products
              </button>

              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#d4eefa] border rounded-md shadow-lg z-50">
                  {["pampers", "boys-fashion", "girls-fashion", "soap", "stroller", "bottle"].map((item) => (
                    <Link
                      to={`/${item}`}
                      key={item}
                      className="block px-4 py-2 mb-1 mt-1 border border-cyan-500 rounded bg-white hover:bg-[#20d4f6] hover:text-white"
                      onClick={handleDropdownItemClick}
                    >
                      {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link
            to="/offers"
            className={`relative transition-all ${location.pathname === "/offers"
                ? "bg-gradient-to-b from-white to-[#b0e4f6] text-black rounded-t-md px-4 py-2 border-b-4 border-cyan-400"
                : ""
              }`}
          >
            Offers
          </Link>
          <Link
            to="/about"
            className={`relative transition-all ${location.pathname === "/about"
                ? "bg-gradient-to-b from-white to-[#b0e4f6] text-black rounded-t-md px-4 py-2 border-b-4 border-cyan-400"
                : ""
              }`}
          >
            About
          </Link>
          <Link
            to="/contact"
           className={`relative transition-all ${location.pathname === "/contact"
                ? "bg-gradient-to-b from-white to-[#b0e4f6] text-black rounded-t-md px-4 py-2 border-b-4 border-cyan-400"
                : ""
              }`}
          >
            Contacts
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border-2 rounded-md border-cyan-500 py-2 pl-3 pr-10 w-full focus:outline-none text-base"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 cursor-pointer transform -translate-y-1/2 text-gray-600 hover:text-sky-500"
            >
              <FaSearch />
            </button>
            {notFoundMessage && (
              <div
                className="mt-2 text-sm text-red-600 border border-red-300 bg-red-50 p-3 rounded"
                dangerouslySetInnerHTML={{ __html: notFoundMessage }}
              />
            )}
          </div>

          <Link to="/cart" className="relative">
            <img
              src={isCartPage ? Cart : addToCart }
              className="w-8"
              alt="Cart"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#2fb4ce] text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>


          <button>
            <Link
              to="/login"
              className="text-sky-500 text-xl font-bold flex items-center gap-1"
            >
              <img
                src={isLogin ? login1 : login}
                className="w-8"
                alt="Cart"
              />
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