"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const slides = [
  {
    title: "Personal sleep tracking.",
    description: "Together with our large network partners we enable you to monitor your sleep patterns",
    mainImage: "/public/images/1.jpg",
    images: [
      "/public/images/2.jpg",
      "/public/images/3.jpg",
      "/public/images/4.jpg",
    ],
  },
  {
    title: "Advanced analytics.",
    description: "Get detailed insights into your sleep quality and duration with our advanced tracking",
    mainImage: "/public/images/footerimg.png",
    images: [
      "/public/images/footerimg2.png",
      "/public/images/footerimg3.png",
      "/public/images/footerimg4.png",
    ],
  },
  {
    title: "Smart alarms.",
    description: "Wake up naturally during your lightest sleep phase with our smart alarm technology",
    mainImage: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
]

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Services2() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className=" bg-white max-w-[1536px] mx-auto rounded-xl shadow-2xl p-4 md:p-8">
      <div className="mx-auto grid max-w-[1536px] gap-6 lg:grid-cols-2 bg-white">
        {/* Left Section */}
        <Card className="relative p-6 md:p-8 overflow-hidden ">
          <div className="space-y-6 ">
            <div className="space-y-4">
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl transition-opacity duration-500"
                key={currentSlide} // Force re-render for animation
              >
                {slides[currentSlide].title}
              </h1>
              <p
                className="text-xl text-muted-foreground transition-opacity duration-500"
                key={`desc-${currentSlide}`} // Force re-render for animation
              >
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={slides[currentSlide].mainImage || "/placeholder.svg"}
                alt="Sleep tracking visualization"
                className="h-full w-full object-cover transition-opacity duration-500"
              />
            </div>

            <div className="flex justify-start gap-4 mt-4">
              <button
                onClick={handlePrevSlide}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300"
                aria-label="Previous slide"
                style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                &larr;
              </button>
              <button
                onClick={handleNextSlide}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300"
                aria-label="Next slide"
                style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                &rarr;
              </button>
            </div>

            <div className="flex gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "h-2 w-8 rounded-full transition-colors duration-300",
                    currentSlide === index ? "bg-gray-900" : "bg-gray-200 hover:bg-gray-300",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 right-8">
            <Button
              size="lg"
              className="h-14 w-14 text-white bg-[#FF4400] p-0 hover:bg-[#FF4400]/90 transition-transform duration-300 hover:scale-105 rounded-full"
              style={{ borderRadius: "50%" }}
            >
              <ArrowUpRight className="h-6 w-6" />
            </Button>
          </div>
        </Card>

        {/* Right Section */}
        <div className="grid gap-6">
          <Card className="aspect-[16/9] overflow-hidden">
            <img
              src={slides[currentSlide].images[0] || "/placeholder.svg"}
              alt="Sleep analytics"
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </Card>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="aspect-square overflow-hidden">
              <img
                src={slides[currentSlide].images[1] || "/placeholder.svg"}
                alt="Sleep statistics"
                className="h-full w-full object-cover transition-opacity duration-500"
              />
            </Card>
            <Card className="aspect-square overflow-hidden">
              <img
                src={slides[currentSlide].images[2] || "/placeholder.svg"}
                alt="Sleep patterns"
                className="h-full w-full object-cover transition-opacity duration-500"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

