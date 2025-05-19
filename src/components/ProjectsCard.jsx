import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cards = [
  {
    id: 2,
    title: 'Drainage Improvements',
    image: '/images/Projects/488/1.jpg',
  },
  {
    id: 10,
    title: 'SR-163 x Ash',
    image: '/images/Projects/399/1.jpg',
  },
  {
    id: 4,
    title: 'Support animal welfare',
    image: '/images/Projects/460/1.jpeg',
  },
]

function ProjectsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1500px] mx-auto p-4">
      {cards.map((card, index) => (
        <Link to={`/projects/${card.id}`} key={index}>
          <motion.div 
            initial={{ 
              y: 100, 
              scale: 0.95
            }}
            whileInView={{ 
              y: 0,
              scale: 1
            }}
            viewport={{ 
              amount: 0.1,
              once: true
            }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 15,
              mass: 0.1,
              delay: 0.05
            }}
            className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-end p-4 md:p-6">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-white text-base md:text-lg lg:text-xl font-medium">{card.title}</h3>
                <div className="absolute bottom-0 right-0 py-3 md:py-4 px-4 md:px-6 transition-transform duration-300 group-hover:translate-x-2">
                  <span className="ml-2 bg-white rounded-full p-2 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-4 w-4 text-black" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsCard
