"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "To ransionad to a more stable, reliable and energy supply",
    description:
      "To ransionad to a more stablereliable and energy supply To ransionad to a more stable reliable and energy supply",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2083-8fXACV7Bhdoe5rgxkdAcClIbmXkgFo.png",
  },
  {
    id: 2,
    title: "Building the future with sustainable infrastructure",
    description:
      "Creating innovative solutions for tomorrow's construction challenges with advanced technology and expertise",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Smart construction for modern cities",
    description:
      "Implementing cutting-edge construction methods to develop efficient and sustainable urban environments",
    image: "/placeholder.svg?height=600&width=800",
  },

  
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heading, setHeading] = useState("To ransionad to a more stable")
  const [subheading, setSubheading] = useState("To ransionad to a To ransionad to a more stable")

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    updateHeaderText((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    updateHeaderText((currentSlide - 1 + slides.length) % slides.length)
  }

  const updateHeaderText = (slideIndex) => {
    switch (slideIndex) {
      case 0:
        setHeading("To ransionad to a more stable")
        setSubheading("To ransionad to a To ransionad to a more stable")
        break
      case 1:
        setHeading("Building sustainable future")
        setSubheading("Innovation meets sustainability in construction")
        break
      case 2:
        setHeading("Smart city development")
        setSubheading("Creating tomorrow's urban landscape today")
        break
      default:
        break
    }
  }

  return (
    <div className="w-full max-w-[1536px] mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 transition-all duration-300">{heading}</h1>
      <p className="text-gray-600 mb-6 transition-all duration-300">{subheading}</p>

      <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
        {/* Main Image and Content */}
        <div className="relative h-[800px]">
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="absolute top-0 left-0 w-full h-full" style={{ left: `${index * 100}%` }}>
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />

                {/* Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-4xl font-bold mb-4 max-w-3xl">{slide.title}</h2>
                  <p className="text-white/90 mb-8 max-w-2xl">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="absolute bottom-8 left-8 right-8 flex gap-2 z-10">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                  index === currentSlide ? "bg-orange-500" : "bg-white"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors z-10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors z-10"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

