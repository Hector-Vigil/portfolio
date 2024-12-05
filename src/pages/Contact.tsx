import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    // Integrate with EmailJS or backend for real functionality
  };

  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded text-black"
              placeholder="Your Message"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;