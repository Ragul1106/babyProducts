import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaTag } from "react-icons/fa";
import { toast } from "react-toastify";


const Cart = () => {

  useEffect(() => {
    document.title = 'Cart | Earthbubs';
  }, []);

  const navigate = useNavigate();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    applyCoupon,
    coupon,
    discount,
    subtotal,
    total,
  } = useContext(CartContext);

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Please add products before proceeding.");
      return;
    }

    if (!isLoggedIn) {
      toast.error("Please login to proceed to checkout.");
      navigate("/login");
    } else {
      navigate("/payment");
    }
  };

  const [localCoupon, setLocalCoupon] = useState(coupon);

  return (
    <div className="p-4 md:px-20 space-y-6">
      <div className="text-lg font-medium space-x-2">
        <Link to="/" className="hover:text-sky-500">Home</Link>
        <span>›</span>
        <span className="">Add to Cart</span>
      </div>

      <div className="hidden sm:grid grid-cols-4 font-bold border border-cyan-200 rounded-lg p-4 text-center text-sm md:text-base text-cyan-800">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 sm:grid-cols-4 sm:items-center text-center border border-cyan-200 rounded-lg p-4 relative text-sm md:text-base gap-4"
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start ml-0 lg:ml-20">
            <img src={item.image} alt="Product" className="w-14 h-14" />
            <span>{item.title}</span>
          </div>

          <div>
            <span className="sm:hidden font-medium text-gray-500 mr-1">Price:</span>
            ₹ {item.price}
          </div>

          <div>
            <div className="flex flex-col items-center">
              <span className="sm:hidden font-medium text-gray-500 mb-1">Quantity:</span>
              <div className="flex items-center border border-cyan-200 rounded px-2 py-1 w-[80px]">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value >= 1) {
                      updateQuantity(item.id, value);
                    }
                  }}
                  className="w-full text-center outline-none bg-transparent"
                />
                <div className="flex flex-col ml-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-sm text-gray-600 hover:text-black leading-none"
                    title="Increase"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() =>
                      item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)
                    }
                    className="text-sm text-gray-600 hover:text-black leading-none"
                    title="Decrease"
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="sm:hidden font-medium text-gray-500 mr-1">Subtotal:</span>
            ₹ {item.subtotal}
          </div>

          <button
            className="absolute top-3 right-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
            onClick={() => removeFromCart(item.id)}
            title="Remove item"
          >
            ✕
          </button>
        </div>
      ))}

      <div className="flex flex-col md:flex-row justify-between gap-10 w-full items-start text-sm md:text-base">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-14 w-full md:w-[40%]">
          <div className="flex items-center bg-[#c5f6fa] px-3 py-2 rounded-lg w-full md:w-auto">
            <FaTag className="mr-2 text-cyan-700" />
            <input
              type="text"
              placeholder="Coupon Code"
              value={localCoupon}
              onChange={(e) => setLocalCoupon(e.target.value)}
              className="bg-transparent outline-none w-full md:w-40"
            />
          </div>
          <button
            onClick={() => applyCoupon(localCoupon)}
            className="bg-[#b0e4f4] hover:bg-cyan-500 cursor-pointer px-8 py-2 rounded-lg w-full md:w-auto"
          >
            Apply Coupon
          </button>
        </div>

        <div className="w-full md:w-[40%] border border-cyan-200 rounded-lg px-6 py-4 space-y-2 text-sm md:text-base">
          <h3 className="font-bold text-lg md:text-xl">Cart Total</h3>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹ {subtotal}</span>
          </div>
          <hr className="border-t-2 border-cyan-200 my-4" />
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>₹ {discount}</span>
          </div>
          <hr className="border-t-2 border-cyan-200 my-4" />
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="border-t-2 border-cyan-200 my-4" />
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹ {total}</span>
          </div>
          <div className="flex justify-center">
            <button
              className="w-48 mt-3 bg-cyan-500 hover:bg-cyan-600 cursor-pointer py-2 rounded-lg"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;