import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DropdownProvider } from "./context/DropdownContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop"
import LoginAndSignup from "./components/LoginAndSignup";
import Home from "./components/Home";
import AboutUsSection from "./components/AboutUs";
import Contact from "./components/Contact";
import Offer from "./components/OfferPage";
import CheckoutPage from "./components/CheckoutPage";
import OrderComplete from "./components/OrderComplete";
import Payment from "./components/PaymentPage";
import AddToCart from "./components/AddToCartPage";
import BoysFashion from "./components/BoysFashion";
import GirlsFashion from "./components/GirlsFashion";
import Soap from "./components/SoapPage";
import Pampers from "./components/PampersPage";
import Stroller from "./components/StrollerPage";
import Bottle from "./components/BottlePage";


function App() {
  return (
    <BrowserRouter>
      <DropdownProvider>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginAndSignup />} />
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offer />} />
            <Route path="/boys-fashion" element={<BoysFashion />} />
            <Route path="/girls-fashion" element={<GirlsFashion />} />
            <Route path="/soap" element={<Soap />} />
            <Route path="/pampers" element={<Pampers />} />
            <Route path="/stroller" element={<Stroller />} />
            <Route path="/bottle" element={<Bottle />} />
            <Route path="/about" element={<AboutUsSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<AddToCart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </DropdownProvider>
    </BrowserRouter>
  );
}

export default App;