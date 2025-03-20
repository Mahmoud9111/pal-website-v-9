"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card"; // Add this import



const contactInfo = [
  {
    title: 'Email Support',
    description: 'Our team can respond in real time.',
    link: 'mailto:hello@slothui.com',
    linkText: 'hello@slothui.com',
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
      </svg>
    ),
  },
  {
    title: 'Visit Our Office',
    description: 'Visit our location in real life.',
    linkText: '22B Elementary Avenue, NY',
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z" />
      </svg>
    ),
  },
  {
    title: 'Call Us Directly',
    description: 'Available during working hours.',
    link: 'tel:+1234-4567-789',
    linkText: '(+1) 1234-4567-789',
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821Z" />
      </svg>
    ),
  },
];



export function WorldMapDemo() {
  return (
    <>
      <div className="px-8 mt-32 mb-12 max-w-[2036px] mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Global Reach
        </h2>
        <p className="text-lg text-neutral-700">
          Connect with us from anywhere in the world. We're here to serve you globally.
        </p>
      </div>
      <div className="py-20 dark:bg-white bg-white max-w-[2036px] mx-auto shadow-2xl rounded-2xl">
        <div className="max-w-[2036px] mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-8">
            <div className="h-[600px]">
              <WorldMap
                dots={[
                  {
                    start: {
                      lat: 64.2008,
                      lng: -149.4937,
                    }, // Alaska (Fairbanks)
                    end: {
                      lat: 34.0522,
                      lng: -118.2437,
                    }, // Los Angeles
                  },
                ]}
              />
            </div>
            <div className="flex items-start h-[600px]">
              <form className="w-full space-y-6 p-8 rounded-lg">
                <h3 className="text-3xl font-semibold dark:text-black text-black mb-6">
                  Get in Touch
                </h3>
                <div>
                  <label className="block text-sm font-medium dark:text-neutral-800 text-neutral-800 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-neutral-800 dark:border-neutral-800 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-neutral-800 text-neutral-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-neutral-800 dark:border-neutral-800 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-neutral-800 text-neutral-800 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-neutral-800 dark:border-neutral-800 bg-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black  text-white py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Send Message
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
          <h2 className="text-lg font-semibold text-orange-500 uppercase">Reach Out To Us</h2>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            We’d Love to Hear From You
          </h1>
          <p className="mt-4 text-gray-500">
            Or just reach out manually to{' '}
            <a href="mailto:hello@slothui.com" className="text-orange-500 underline">
              hello@slothui.com
            </a>
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 text-left">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-col items-start mb-4">
                <info.icon className="w-9 h-9 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
              </div>
              <p className="text-gray-500">{info.description}</p>
              {info.link ? (
                <a
                  href={info.link}
                  className="mt-4 block text-orange-500 hover:text-orange-400"
                >
                  {info.linkText}
                </a>
              ) : (
                <p className="mt-4 text-orange-500">{info.linkText}</p>
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
