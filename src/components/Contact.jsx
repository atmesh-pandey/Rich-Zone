import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xeozlpzk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your response has been submitted!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Submission failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4"
    >
      <h2 className="uppercase mb-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[color:#9BC936]">
        Contact Us
      </h2>

      <div className="w-full max-w-7xl flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[75%] p-6 sm:p-10 rounded-lg shadow-xl border border-gray-200 bg-gray-50 space-y-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-base sm:text-lg font-medium text-gray-600 mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base sm:text-lg font-medium text-gray-600 mb-2">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-base sm:text-lg font-medium text-gray-600 mb-2">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 h-32 resize-none"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[color:#9BC936] text-white font-semibold rounded-lg hover:bg-[color:#85b02f] transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Contact;
