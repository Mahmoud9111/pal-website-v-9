"use client";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    title: 'Email Support',
    description: 'Our team typically responds within 24 hours.',
    link: 'mailto:info@palsd.com',
    linkText: 'info@palsd.com',
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
      </svg>
    ),
  },
  {
    title: 'Visit Our Office',
    description: 'Visit our location in San Diego.',
    link: 'https://www.google.com/maps?q=9939+Hibert+St+Ste+201+San+Diego+CA+92131',
    linkText: '9939 Hibert St. Ste 201, San Diego, CA, 92131',
    target: '_blank',
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z" />
      </svg>
    ),
  },
  {
    title: 'Contact Numbers',
    description: 'Available during business hours.',
    links: [
      { href: 'tel:+18588605300', text: 'Phone: (858) 860-5300' },
      { href: 'tel:+18588605556', text: 'Fax: (858) 860-5556' }
    ],
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821Z" />
      </svg>
    ),
  },
];

export function WorldMapDemo() {
  const location = {
    name: "PAL General Engineering Inc.",
    x: 15, // Adjusted for San Diego location
    y: 38 // Adjusted for San Diego location
  };

  useEffect(() => {
    emailjs.init("nowSj9JnTDWhSMmXI");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_i77m8tp",
        "template_ak5v2hg",
        formData
      );
      
      alert('Message sent successfully!');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="px-8 mt-32 mb-12 max-w-[1600px] mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-blue-500">
          Get in Touch
        </h2>
        <p className="text-lg text-neutral-700">
          Connect with us from anywhere in the world. We're here to serve you globally.
        </p>
      </div>
      <div className="py-20 dark:bg-white bg-white max-w-[1600px] mx-auto shadow-2xl rounded-2xl">
        <div className="max-w-[2036px] mx-auto">
          <div className="w-full px-8 flex flex-col md:flex-row gap-8 items-center">
            {/* Image Column */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <img 
                  src="/images/World Map.png" 
                  alt="Contact Us" 
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                  }}
                >
                  {/* Animated ring centered under dot */}
                  <div className="absolute w-8 h-8 bg-blue-500/60 rounded-full animate-ping -translate-x-1/4 -translate-y-1/4" />
                  {/* Main dot */}
                  <div className="relative w-4 h-4 bg-blue-500 rounded-full z-10" />
                  {/* Enhanced Tooltip */}
                  <div className="absolute left-6 top-0 bg-white shadow-xl rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 w-64">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{location.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">9939 Hibert St. Ste 201, San Diego, CA, 92131</p>
                        <div className="mt-2 text-sm text-blue-500">
                          Contractor License # 916931
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="w-full space-y-6 p-8 rounded-lg">
                <h3 className="text-3xl font-semibold dark:text-black text-black mb-6">
                  Get in Touch
                </h3>
                <div>
                  <label className="block text-sm font-medium dark:text-neutral-800 text-neutral-800 mb-1">
                    Name
                  </label> 
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-neutral-800 dark:border-neutral-800 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-neutral-800 text-neutral-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-neutral-800 dark:border-neutral-800 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-neutral-800 text-neutral-800 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-neutral-800 dark:border-neutral-800 bg-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Card */}
      <div className="px-8 mb-12 mt-32 max-w-[2036px] mx-auto">
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-[1536px]">
            {/* Title and Description */}
            <div className="mb-12 text-left">
              <h2 className="text-lg font-semibold text-blue-500 uppercase">Contact PAL General Engineering</h2>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Professional Engineering Services
              </h1>

            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 text-left">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex flex-col items-start mb-4">
                    <info.icon className="w-9 h-9 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  <p className="text-gray-500">{info.description}</p>
                  {info.links ? (
                    <div className="mt-4 space-y-2">
                      {info.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className="block text-blue-500 hover:text-blue-400"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ) : info.link ? (
                    <a
                      href={info.link}
                      target={info.target}
                      className="mt-4 block text-blue-500 hover:text-blue-400"
                    >
                      {info.linkText}
                    </a>
                  ) : (
                    <p className="mt-4 text-blue-500">{info.linkText}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
