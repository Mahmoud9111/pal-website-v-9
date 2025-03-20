"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { LocationCard } from "./location-card"

export default function GlobePage() {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const fadeInRef = useRef(0)

  useEffect(() => {
    let phi = 0
    let width = 0
    const onResize = () => {
      const container = canvasRef.current?.parentElement
      width = container ? Math.min(container.offsetWidth * 1.1, 900) : 900
      if (canvasRef.current) {
        canvasRef.current.width = width
        canvasRef.current.height = width
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 1,
      height: width * 2,
      phi: Math.PI / 4, // Center the globe horizontally
      theta: Math.PI / 25, // Adjust vertical view of the globe
      dark: 3,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0, 1, 1],  
      glowColor: [1, 1, 1],
      markers: [
        // San Diego
        { location: [32.7157, -117.1611], size: 0.04 },
      ],
      
      onRender: (state) => {
        if (fadeInRef.current < 1) {
          fadeInRef.current += 0.01
          state.phi = phi
        }
        state.phi = phi + pointerInteractionMovement.current
        phi += 0.0003
        state.width = width * 2
        state.height = width * 2
      },
    })

    const onPointerDown = (e) => {
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current
      canvasRef.current.style.cursor = "grabbing"
    }

    const onPointerUp = () => {
      pointerInteracting.current = null
      canvasRef.current.style.cursor = "grab"
    }

    const onPointerOut = () => {
      pointerInteracting.current = null
      canvasRef.current.style.cursor = "grab"
    }

    const onPointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current
        pointerInteractionMovement.current = delta * 0.01
      }
    }

    canvasRef.current.addEventListener("pointerdown", onPointerDown)
    canvasRef.current.addEventListener("pointerup", onPointerUp)
    canvasRef.current.addEventListener("pointerout", onPointerOut)
    canvasRef.current.addEventListener("pointermove", onPointerMove)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="bg-white text-black py-8 px-4 sm:py-12">
      {/* Updated title section with left alignment */}
      <div className="max-w-[1600px] mx-auto mb-12 px-8 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2">
          Conveniently located,
          <br />
          exquisitely designed.
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Enjoy unparalleled care and comfort at our clinic,
          situated near major airports.
        </p>
      </div>

      <div className="border border-gray-300 rounded-2xl max-w-[1536px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
        <div className="w-full lg:w-6/12 flex justify-center pr-0 lg:pr-8">
          <div className="relative w-full aspect-square flex items-center justify-center max-w-[600px] mx-auto">
            <canvas
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                cursor: 'grab',
                contain: 'layout paint size',
                maxWidth: '600px',
                maxHeight: '600px',
                margin: '0 auto'
              }}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
            
            <div 
              className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] px-4 z-10 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => window.open('https://maps.google.com/?q=2850+S.+Delaware+St.+San+Mateo+CA+94403', '_blank')}
            >
              <LocationCard
                city="San Francisco Bay Area"
                address="2850 S. Delaware St. Ste 100"
                location="San Mateo, CA 94403"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14.PNG-NguVwQzxIwOoRcyP6dTHLuZ3wkIlrT.png"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 p-4 sm:p-6 lg:pl-12">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your phone number"
                />
              </div>

              {/* New Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
