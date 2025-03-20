"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion' // Add this import

const reviews = [
  {
    quote: "Proactive customer management in Planhat has transformed our teams' operating performance.",
    author: "Alexey Smolyanyy",
    role: "Director of Customer Success Strategy and Operations, Redis",
  },
  {
    quote: "The platform's intuitive design has streamlined our entire customer success workflow.",
    author: "Emily Chen",
    role: "Head of Customer Experience, TechFlow Global",
  },
  {
    quote: "Since implementing Planhat, we've seen a 40% increase in customer satisfaction scores.",
    author: "Marcus Thompson",
    role: "VP of Customer Success, CloudScale Solutions",
  },
  {
    quote: "The insights we've gained through Planhat have revolutionized our approach to customer relationships.",
    author: "Sofia Rodriguez",
    role: "Customer Success Director, InnovateHub",
  },
  {
    quote: "Planhat has become an indispensable tool for our customer success strategy.",
    author: "James Wilson",
    role: "Chief Customer Officer, Enterprise Solutions Inc",
  },
]

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-[1480px] space-y-6">
        <section className="grid gap-6 md:grid-cols-2 max-w-[1480px] mx-auto">
          {/* Left Card */}
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
            className="group relative overflow-hidden rounded-3xl bg-black"
          >
            <div className="relative aspect-square w-full">
              <img
                src="/public/images/6.jpg"
                alt="Platform interface"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">Intuitive yet deep</h2>
                  <p className="mt-4 text-xl text-white/80">A scalable platform your team can adopt in days.</p>
                </div>
            {/* Updated Button Container */}
            <div className="mt-12 flex justify-center w-full">
                </div>
            {/* Updated Button Container */}
            <div className="mt-12 flex justify-center w-full">
              <button className="group relative bg-transparent text-white hover:bg-white/5 rounded-full px-6 sm:px-4 py-3 sm:py-2 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-md border border-white/10 flex items-center justify-center">
                Request a demo
                <span className="ml-2 bg-orange-600 rounded-full p-2 sm:p-3 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </button>
            </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
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
              delay: 0.15
            }}
            className="relative overflow-hidden rounded-3xl bg-zinc-50 shadow-2xl border border-gray-100"
          >
            <div className="flex aspect-square w-full flex-col p-12">
              <div className="flex flex-1 flex-col">
                <blockquote 
                  key={currentReview} 
                  className="flex-1 text-[2.75rem] leading-[1.2] tracking-tight animate-fadeSlide"
                >
                  "{reviews[currentReview].quote}"
                </blockquote>
                <div 
                  key={`author-${currentReview}`} 
                  className="mt-8 animate-fadeSlide"
                >
                  <p className="text-xl font-medium">{reviews[currentReview].author}</p>
                  <p className="text-zinc-600 text-lg">{reviews[currentReview].role}</p>
                </div>
              </div>

              {/* Centered dots and link */}
              <div className="mt-8">
                <div className="flex justify-center space-x-3 mb-8">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentReview === index ? "w-8 h-2 bg-orange-500" : "w-8 h-2 bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="link"
                  className="group w-full justify-center text-orange-500 hover:text-orange-600 hover:no-underline"
                >
                  Read impact study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

