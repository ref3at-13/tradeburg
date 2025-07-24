// Tradeburg Landing Page
// Framework: Next.js with Tailwind CSS
// Contact form sends email via Formspree to info@tradeburg.de

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Tradeburg Logo" className="h-12" />
          <nav className="space-x-4 hidden md:block">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-left md:text-center">
            Your Business Partner<br />
            across Europe and the Arab World
          </h1>
          <p className="text-xl mt-4 md:text-center text-left">
            Connecting markets, cultures, and opportunities across continents<br />
            with deep local expertise and trusted partnerships.
          </p>
          <div className="mt-6 md:text-center text-left">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-blue-700 rounded hover:bg-gray-100"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Tradeburg</h2>
        <p className="text-center text-lg mb-12">
          Founded by partners from Germany and Egypt who have lived and worked across both regions,<br />
          bringing unparalleled cultural understanding and business expertise.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-left">Our Mission</h3>
<div className="grid md:grid-cols-12 gap-6 md:items-start md:h-full">
          <div className="md:col-span-6 flex flex-col justify-between h-full">
  <p className="text-gray-700 mb-4 text-left">
              Our main goal is to find and grow business opportunities in both directions between Europe and the Arab world. We leverage our deep understanding of both cultures and business environments to create meaningful, lasting partnerships.
            </p>
            <p className="text-gray-700 text-left">
              Through our work, we hope to contribute to promoting better understanding, respect, and harmony between these dynamic regions, while driving economic growth and innovation.
            </p>
          </div>

          <div className="p-6 text-center border rounded-lg shadow-sm bg-white md:col-span-3 flex flex-col justify-start h-full self-end">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3h0A9 9 0 0121 12.79z" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">Cross-Cultural Expertise</h4>
            <p className="text-sm text-gray-600">Deep understanding of European and Arab markets</p>
          </div>

          <div className="p-6 text-center border rounded-lg shadow-sm bg-white md:col-span-3 flex flex-col justify-start h-full">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3zM6 19c0-1.657 3.582-2.5 6-2.5s6 .843 6 2.5v1H6v-1z" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">Trusted Partnerships</h4>
            <p className="text-sm text-gray-600">Building lasting business relationships</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Market Analysis & Entry</h3>
            <p>We provide strategic research and entry planning for expansion into new territories.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Business Setup</h3>
            <p>Support with incorporation, legal requirements, and local regulations.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Partnership Development</h3>
            <p>Connecting you with agents, distributors, and partners in Europe and the Arab world.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
        <form action="https://formspree.io/f/mldndgan" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name *</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 p-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email *</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
            <input type="text" id="phone" name="phone" className="w-full border border-gray-300 p-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message *</label>
            <textarea id="message" name="message" required rows="4" className="w-full border border-gray-300 p-2 rounded" onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2024 Tradeburg. All rights reserved.</p>
      </footer>
    </div>
  );
}
