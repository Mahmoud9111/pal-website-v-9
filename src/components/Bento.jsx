import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Bento() {
  const navigate = useNavigate();
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleViewportEnter = () => {
    setHasPlayed(true);
  };

  const items = [    
    { 
      title: 'Technology', 
      subtitle: 'Future innovations', 
      image: '/images/pala_img2.jpg',
      projectId: '1' // ID corresponding to Pala Vista in PropertyListing
    },
    { 
      title: 'Food', 
      subtitle: 'Culinary delights', 
      image: '/images/Projects/506/1.JPG',
      projectId: '3'
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8 max-w-[1536px] mx-auto mb-4 sm:mb-8">
        <div className="w-full md:w-1/3">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4"
          >
            Discover Our Projects
          </motion.h1>
          
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.5
            }}
            className="text-gray-600 text-base sm:text-lg"
          >
            Explore our range of innovative solutions and services designed to meet your needs.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-[1536px] mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(`/projects/${item.projectId}`)}
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
            className={`relative overflow-hidden rounded-xl sm:rounded-3xl ${
              index === 0 
                ? 'cursor-pointer sm:col-span-2 aspect-[3/2] sm:aspect-[2/1] sm:order-last' 
                : 'cursor-pointer aspect-square'
            } group`}
          >
            <div className="w-full h-full overflow-hidden">
              <img src={item.image || '/placeholder.svg'} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
            <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white">
              <h2 className="text-lg sm:text-xl font-bold">{item.title}</h2>
              <p className="text-xs sm:text-sm">{item.subtitle}</p>
            </div>
            <div className="absolute bottom-0 right-0 py-3 px-4 sm:py-4 sm:px-6 transition-transform duration-300 group-hover:translate-x-2">
              <span className="ml-2 bg-white rounded-full p-1.5 sm:p-2 lg:p-3 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

