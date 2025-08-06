import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Contact from "../assets/images/contactImage.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact | Earthbubs";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, subject, message } = formData;

    if (!firstName.trim()) {
      toast.error("First Name is required");
      return false;
    }
    if (!lastName.trim()) {
      toast.error("Last Name is required");
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Valid Email is required");
      return false;
    }
    if (!phone.trim() || !/^[0-9]{10}$/.test(phone)) {
      toast.error("Valid 10-digit Phone Number is required");
      return false;
    }
    if (!subject.trim()) {
      toast.error("Please select a subject");
      return false;
    }
    if (!message.trim() || message.length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-around gap-8 p-6 md:p-16 bg-[#f3f3f3]">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Contact}
          alt="contact"
          className="w-3/4 h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-around">
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-black font-semibold text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
              />
            </div>
            <div className="space-y-1">
              <label className="text-black font-semibold text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-black font-semibold text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
              />
            </div>
            <div className="space-y-1">
              <label className="text-black font-semibold text-sm">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b-2 border-cyan-400 focus:outline-none py-2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-black text-sm font-bold">Select Subject?</label>
            <div className="flex flex-wrap gap-4">
              {["General Inquiry", "Call Request", "Complaint", "Information"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="subject"
                    value={option}
                    checked={formData.subject === option}
                    onChange={handleChange}
                    className="accent-cyan-400"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-black font-semibold text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message.."
              className="w-full border-b-2 border-cyan-400 focus:outline-none resize-none"
              rows={3}
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 cursor-pointer text-black font-semibold rounded-md px-8 py-3 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;