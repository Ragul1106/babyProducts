// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const stored = localStorage.getItem("Baby products cart");
//     return stored ? JSON.parse(stored) : [];
//   });

//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);

//   useEffect(() => {
//     localStorage.setItem("Baby products cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     const exists = cartItems.find((item) => item.id === product.id);
//     if (exists) {
//       const updated = cartItems.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + product.quantity, subtotal: (item.quantity + product.quantity) * item.price }
//           : item
//       );
//       setCartItems(updated);
//     } else {
//       setCartItems([...cartItems, { ...product, subtotal: product.price * product.quantity }]);
//     }
//   };

//   const updateQuantity = (id, quantity) => {
//     const updated = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity, subtotal: item.price * quantity } : item
//     );
//     setCartItems(updated);
//   };

//   const removeFromCart = (id) => {
//     const updated = cartItems.filter((item) => item.id !== id);
//     setCartItems(updated);
//   };

//   const applyCoupon = (code) => {
//     if (code === "EB55") {
//       setDiscount(250);
//     } else {
//       setDiscount(0);
//     }
//     setCoupon(code);
//   };

//   const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
//   const total = subtotal - discount;

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         updateQuantity,
//         removeFromCart,
//         applyCoupon,
//         coupon,
//         discount,
//         subtotal,
//         total,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("Baby products cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem("Baby products cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      const updated = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + product.quantity,
              subtotal: (item.quantity + product.quantity) * item.price,
            }
          : item
      );
      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, subtotal: product.price * product.quantity },
      ]);
    }
  };

  const updateQuantity = (id, quantity) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity, subtotal: item.price * quantity }
        : item
    );
    setCartItems(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const applyCoupon = (code) => {
    if (code === "EB55") {
      setDiscount(250);
    } else {
      setDiscount(0);
    }
    setCoupon(code);
  };

  const clearCart = () => {
    setCartItems([]);
    setCoupon("");
    setDiscount(0);
    localStorage.removeItem("Baby products cart"); 
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
  const total = subtotal - discount;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        applyCoupon,
        clearCart, 
        coupon,
        discount,
        subtotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
