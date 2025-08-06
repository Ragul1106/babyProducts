import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import orderImage from '../assets/images/order.png';
import { Link, useNavigate } from 'react-router-dom';

const OrderComplete = () => {
     useEffect(() => {
            document.title = 'Order Complete | Earthbuds';
        }, []);
    const [showConfetti, setShowConfetti] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col text-center px-4 relative">
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={300}
                    recycle={false}
                />
            )}

            <div className="text-lg font-medium space-x-2 pl-10 pt-6 text-left">
                <Link to="/" className="hover:text-sky-500">Home</Link>
                <span>›</span>
                {/* <span
                    className="hover:text-sky-500 cursor-pointer"
                    onClick={() => navigate('/cart')}
                >
                    Add To Cart
                </span> */}
                <span>Add To Cart</span>
                <span>›</span>
                <span>Payment</span>
                {/* <span className="hover:text-sky-500 cursor-pointer" onClick={() => navigate('/payment')}>Payments</span> */}
                <span>›</span>
                <span>Order Complete</span>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
                <div className="relative flex items-center justify-center">
                    <img
                        src={orderImage}
                        alt="Order Complete"
                        className="w-[500px] h-[500px] object-contain"
                    />
                </div>

                <p className="mt-1 text-lg text-gray-600">
                    Order ID: <strong>OCD1232</strong>
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
                    Your Order Is Completed!
                </h1>
                <p className="mt-4 text-gray-500 max-w-xl">
                    Thank you for your order! Your order is being processed and will be completed within 3–6 hours. You will receive an email confirmation when your order is completed.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-3 bg-[#2fe4f6] mb-5 mt-8 cursor-pointer text-black font-semibold rounded-lg hover:bg-[#b0e4f4] transition-all duration-300"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default OrderComplete;
