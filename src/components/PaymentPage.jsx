import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import paymentOptions from "../assets/images/payment.png";

const Payment = () => {
   useEffect(() => {
          document.title = 'Payment | Earthbubs';
      }, []);
  const navigate = useNavigate();
  const { subtotal, discount, total, clearCart } = useContext(CartContext);


  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: true,
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter valid 10-digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter valid email";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (paymentMethod === "cash") {
      clearCart();
      navigate("/order-complete");
    } else {
      alert("Online payment not implemented yet.");
    }
  };

  return (
    <div>
      <div className="text-lg font-medium space-x-2 pl-10 pt-10">
        <Link to="/" className="hover:text-sky-500 cursor-pointer">Home</Link>
        <span>›</span>
        <Link to="/cart" className="hover:text-sky-500 cursor-pointer">Add to Cart</Link>
        <span>›</span>
        <span className="">Payments</span>
      </div>
      <h2 className="text-xl md:text-2xl pl-20 pt-20 font-semibold mb-4">Details</h2>
      <div className="flex flex-col md:flex-row gap-[10em] p-6 md:px-20">


        <div className="w-full md:w-1/2 space-y-4 border border-cyan-300 rounded-lg p-6">


          {[
            { label: "First Name", name: "firstName", required: true },
            { label: "Company Name", name: "companyName" },
            { label: "Street Address", name: "streetAddress" },
            { label: "Apartment, Floor, etc (Optional)", name: "apartment" },
            { label: "Tower/City", name: "city", required: true },
            { label: "Phone Number", name: "phone", required: true },
            { label: "Email Address", name: "email", required: true },
          ].map(({ label, name, required }) => (
            <div key={name}>
              <label className="block text-sm md:text-base font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input
                type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full bg-[#] border border-cyan-500 p-3 md:text-base h-14 rounded-lg mt-4"
              />
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}

          <label className="flex items-center mt-2 text-sm md:text-base">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="mr-2"
            />
            Save this information for faster check-out next time
          </label>
        </div>

        <div className="w-full md:w-1/3 h-[80vh] md:h-[70vh] border border-cyan-300 rounded-lg px-6 md:px-6 py-8 md:py-6">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>₹ {subtotal}</span>
          </div>
          <hr className="border-t-2 border-cyan-200 my-4" />

          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>₹ {discount}</span>
          </div>
          <hr className="border-t-2 border-cyan-200 my-4" />

          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between border-t border-cyan-300 font-semibold  pt-2 mb-1">
            <span>Total:</span>
            <span>₹ {total}</span>
          </div>

          <div className="my-6">
            <img
              src={paymentOptions}
              alt="Payment Options"
              className="w-full m-0 p-0"
            />
          </div>

          <div className="mt-4">
            <label className="flex items-center justify-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              <span>Cash on delivery</span>
            </label>
          </div>
          <div className="flex justify-center">
            <button
              className="w-48 mt-5 cursor-pointer bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Payment;
