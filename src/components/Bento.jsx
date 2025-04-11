import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Bento() {
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleViewportEnter = () => {
    setHasPlayed(true);
  };

  const items = [    
    { title: 'Technology', subtitle: 'Future innovations', image: '/public/images/pala_img2.jpg' },
    { title: 'Food', subtitle: 'Culinary delights', image: '/public/images/Projects/506/1.jpg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1536px] mx-auto mb-8">
        <div className="md:w-1/3">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={handleViewportEnter}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.5
            }}
            className="text-4xl font-bold mb-4"
          >
            Discover Our Projects
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.5,
              delay: 0.1
            }}
            className="text-gray-600 text-lg"
          >
            Explore our range of innovative solutions and services designed to meet your needs.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1536px] mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ 
              y: 100, 
              scale: 0.95
            }}
            whileInView={{ 
              y: 0,
              scale: 1
            }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 15,
              mass: 0.1,
              delay: 0.05
            }}
            className={`relative overflow-hidden rounded-3xl ${index === 0 ? 'cursor-pointer sm:col-span-2 aspect-[2/1] sm:order-last' : 'cursor-pointer aspect-[1/1]'} group`}
          >
            <div className="w-full h-full overflow-hidden">
              <img src={item.image || '/placeholder.svg'} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-sm">{item.subtitle}</p>
            </div>
            <div className="absolute bottom-0 right-0 py-4 px-6 transition-transform duration-300 group-hover:translate-x-2">
              <span className="ml-2 bg-white rounded-full p-2 sm:p-3 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

