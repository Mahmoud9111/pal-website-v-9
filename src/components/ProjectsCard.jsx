import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Fight deforestation',
    image: '/public/images/pala_img1.jpg',
  },
  {
    title: 'Invest in ocean health',
    image: '/public/images/pala_img2.jpg',
  },
  {
    title: 'Support animal welfare',
    image: '/public/images/pala_img1.jpg',
  },
  
]

function ProjectsCard() {
  return (
    <div className="flex gap-4 flex-wrap justify-center max-w-[1536px] mx-auto">
      {cards.map((card, index) => (
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
          className="relative w-[490px] h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img 
            src={card.image} 
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-107"
          />
          <div className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-end p-6">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-white font-medium">{card.title}</h3>
              <div className="absolute bottom-0 right-0 py-4 px-6 transition-transform duration-300 group-hover:translate-x-2">
                <span className="ml-2 bg-white rounded-full p-2 sm:p-3 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectsCard
