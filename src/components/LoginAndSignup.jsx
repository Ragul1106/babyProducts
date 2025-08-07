import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import baby from "../assets/images/babyimg.png";

const AuthPage = () => {
  useEffect(() => {
    document.title = "Login | Earthbubs";
  }, []);

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const storedUser = JSON.parse(localStorage.getItem("Baby products user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("User does not exist. Redirecting to signup...");
      setTimeout(() => {
        setIsLogin(false);
        setError("");
      }, 1500);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const nameRegex = /^[A-Za-z\s]{3,}$/;

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError("Name must contain only letters and be at least 3 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    localStorage.setItem(
      "Baby products user",
      JSON.stringify({ name, email, password })
    );
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="w-full md:w-[60%] flex items-center justify-center p-10">
        <img src={baby} alt="Baby" className="h-full w-full object-contain" />
      </div>

      <div className="w-full md:w-[30%] flex flex-col justify-center px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Log In" : "Sign Up"}</h2>
        <p className="mb-4 text-black font-semibold text-sm">Enter your details below</p>

        {error && (
          <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="border-b-2 border-gray-400 focus:outline-none px-1 py-2 mt-3 text-sm"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border-b-2 border-gray-400 focus:outline-none px-1 py-2 text-sm w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 px-2 text-gray-600 text-xl focus:outline-none"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <div className="flex flex-row gap-3 md:gap-4 mt-5">
              <button
                type="submit"
                className="bg-[#2fd4e6] hover:bg-[#b0e4f4] text-black cursor-pointer py-2 md:py-3 px-10 rounded text-xl"
              >
                Log In
              </button>
              <div className="flex flex-col gap-2 text-xs text-gray-600 mt-1">
                <span
                  className="hover:underline cursor-pointer text-lg"
                  onClick={() => navigate("/forget-password")}
                >
                  Forget Password?
                </span>

              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-5">
              Don't have an account?
              <button
                type="button"
                className="text-[#2fd4e6] cursor-pointer underline"
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-b-2 border-gray-400 focus:outline-none px-1 py-2 text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="border-b-2 border-gray-400 focus:outline-none px-1 py-2 text-sm"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border-b-2 border-gray-400 focus:outline-none px-1 py-2 text-sm w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 px-2 text-gray-500 text-xl focus:outline-none"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <button
              type="submit"
              className="bg-[#2fd4e6] hover:bg-[#b0e4f4] text-black cursor-pointer py-2 rounded text-sm"
            >
              Create account
            </button>

            <div className="flex items-center justify-center">
              <button
                type="button"
                className="border flex items-center disabled cursor-not-allowed gap-2 justify-center w-full py-2 rounded hover:bg-gray-100 text-sm"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M21.35 11.1h-9.18v2.9h5.25c-.22 1.2-.9 2.2-1.9 2.9v2.4h3.1c1.82-1.7 2.88-4.1 2.88-6.9 0-.6-.06-1.1-.15-1.6z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.17 22c2.43 0 4.46-.8 5.95-2.2l-3.1-2.4c-.8.6-1.8 1-2.85 1-2.19 0-4.05-1.5-4.7-3.6h-3.2v2.3C6.05 20 8.86 22 12.17 22z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.47 14.8c-.18-.5-.28-1-.28-1.6s.1-1.1.28-1.6V9.3H4.27C3.6 10.6 3.2 12.2 3.2 14s.4 3.4 1.07 4.7l3.2-2.3z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.17 7.6c1.3 0 2.46.5 3.38 1.4l2.54-2.5C16.63 4.8 14.6 4 12.17 4 8.86 4 6.05 6 4.27 8.7l3.2 2.3c.65-2.1 2.5-3.6 4.7-3.6z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>

            <p className="text-sm font-semibold text-center mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-sky-500 underline cursor-pointer"
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                }}
              >
                Log In
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
