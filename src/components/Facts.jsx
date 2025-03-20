import { motion } from "framer-motion"
import { useRef } from "react"

export default function Facts() {
  const containerRef = useRef(null);

  const stats = [
    { number: "17K+", label: "Satisfied Customers", bg: "bg-gray-100" },
    { number: "25+", label: "Year of Experience", bg: "bg-gray-100" },
    { number: "150+", label: "Award Winning", bg: "bg-gray-100" },
    { number: "25+", label: "Property Collections", bg: "bg-gray-100" },
  ]

  const titleVariants = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 40,
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 60,
        duration: 0.6,
        delay: i * 0.2
      }
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-[1536px] mx-auto space-y-16">
        <div className="space-y-4 max-w-2xl">
          <motion.h2 
            className="text-4xl font-medium tracking-tight"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Achievements
            <br />
            in Numbers
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We take pride in our accomplishments and the trust our clients place in us. 
            These numbers reflect our commitment to excellence and customer satisfaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="grid grid-cols-2 gap-6 h-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className={`p-6 rounded-3xl shadow-xl flex flex-col justify-center items-start ${stat.bg} relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-orange-500 transition-transform duration-200 z-[1] rounded-4xl transform origin-bottom-left scale-0 group-hover:scale-100"></div>
                <span className="text-gray-950 text-4xl md:text-5xl font-bold relative z-[2] duration-200 group-hover:text-white">{stat.number}</span>
                <p className="text-gray-600 mt-2 text-base md:text-lg relative z-[2] group-hover:text-white">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-lg">
            <img
              src="/public/images/5.jpg"
              alt="Modern House"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}