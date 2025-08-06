import React, { useEffect } from 'react';

const ShippingAndRefund = () => {
  useEffect(() => {
    document.title = 'Shipping & Refund Policy | BabyCare Store';
  }, []);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Shipping & Refund Policy – BabyCare Store
      </h1>
      <p className="text-base text-gray-600 mb-6">
        <span className="font-semibold">Effective Date:</span> 12/07/25
      </p>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Thank you for shopping with BabyCare Store. We are committed to delivering your baby essentials with care and efficiency. Please review our Shipping and Refund Policy to understand how we handle orders, shipping, and returns.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Shipping Policy
      </h2>

      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          <strong>Processing Time:</strong> Orders are processed within 1–2 business days. Orders placed on weekends or holidays will be processed the next business day.
        </p>
        <p>
          <strong>Delivery Time:</strong> Delivery typically takes 3–7 business days depending on your location. Remote areas may take longer.
        </p>
        <p>
          <strong>Shipping Charges:</strong> Shipping is free for orders over ₹999. A standard shipping fee of ₹49 applies to orders below ₹999.
        </p>
        <p>
          <strong>Tracking:</strong> Once your order is shipped, a tracking ID will be sent to your email or phone via SMS. You can track the order through our courier partner’s website.
        </p>
        <p>
          <strong>Delays:</strong> We are not responsible for delays caused by weather conditions, courier service disruptions, or incorrect shipping information provided by the customer.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Return & Refund Policy
      </h2>

      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          <strong>Eligibility:</strong> Returns are accepted within 7 days of delivery. The item must be unused, in original packaging, and in a resellable condition.
        </p>
        <p>
          <strong>Non-Returnable Items:</strong> For hygiene reasons, products such as baby wipes, diapers, feeding bottles, and personal care items cannot be returned unless damaged or defective.
        </p>
        <p>
          <strong>Damaged Products:</strong> If you receive a damaged or incorrect item, please contact us within 48 hours of delivery with photos and order details.
        </p>
        <p>
          <strong>Refund Process:</strong> Once the returned product is inspected and approved, a refund will be processed to your original payment method within 5–7 business days.
        </p>
        <p>
          <strong>Exchange:</strong> Exchanges are subject to stock availability. If the item is not available, a refund will be issued instead.
        </p>
        <p>
          <strong>Return Shipping:</strong> We will arrange pickup for eligible returns. In some cases, customers may be asked to ship the item themselves and share a receipt for reimbursement.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        For any questions regarding shipping or returns, please contact our customer support team at <a href="mailto:support@babycarestore.com" className="text-blue-600 hover:underline">support@babycarestore.com</a> or call +91-98765-43210.
      </p>
    </div>
  );
};

export default ShippingAndRefund;
