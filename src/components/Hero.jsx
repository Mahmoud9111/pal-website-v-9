import { useEffect, useState } from "react"
import { ArrowUpRight } from 'lucide-react'  // Add this import at the top

export default function AboutSection() {
  const [shrinkFactor, setShrinkFactor] = useState(1)
  const [borderRadius, setBorderRadius] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Shrinking effect
      const newShrinkFactor = Math.max(0.90, 1 - scrollY / 1000)
      setShrinkFactor(newShrinkFactor)
      
      // Rounded corners effect
      const newBorderRadius = Math.min(scrollY / 6, 30)
      setBorderRadius(newBorderRadius)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
       <>
        <div className="min-h-screen bg-white">
      <div>
        <div 
          className="w-full h-screen transition-all duration-700 ease-out relative"
          style={{
            transform: `scale(${shrinkFactor})`,
            borderRadius: `${borderRadius}px`
          }}
        >
          <img
            src="/images/5.jpg" // Remove 'public' from path
            alt="About us header image"
            className="w-screen h-full object-cover transition-all duration-500 ease-out"
            style={{ borderRadius: `${borderRadius}px` }}
          />
          <div 
            className="absolute inset-0 bg-black/30"
            style={{ borderRadius: `${borderRadius}px` }}
          >
            <div className="h-full flex items-center">
              <div className="max-w-[1536px] mx-auto w-full px-4 sm:px-6 lg:px-16">
                <div className="max-w-[800px]">

                  <h1 className="text-4xl sm:text-6xl lg:text-[96px] leading-[1.1] font-bold mb-4 sm:mb-6 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
Socal Asphalt Paving Leaders


                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-medium max-w-[600px] mb-6 sm:mb-8">
                    Expert paving and construction services delivering superior results. 
                    From driveways to commercial projects, we build with precision and pride.
                  </p>
                  <button className="group relative bg-transparent text-white hover:bg-white/5 rounded-full px-2.5 sm:px-3 py-2.5 sm:py-3 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-md border border-white/10 flex items-center justify-center">
                    Request a Quote
                    <span className="ml-2 bg-blue-700 rounded-full p-1.5 sm:p-2 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        


                      {/* New minimal mouse scroll indicator */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
              <div className="flex flex-col items-center gap-2">
                <svg 
                  width="30" 
                  height="40" 
                  viewBox="0 0 20 30" 
                  className="stroke-current animate-mouse"
                >
                  <rect 
                    x="1" 
                    y="1" 
                    width="18" 
                    height="28" 
                    rx="9" 
                    className="fill-none stroke-2"
                  />
                  <line 
                    x1="10" 
                    y1="8" 
                    x2="10" 
                    y2="12" 
                    className="stroke-2 animate-mouseScroll"
                  />
                </svg>
                <span className="text-xs tracking-[0.2em] font-light">SCROLL</span>
              </div>
            </div>

      </div>
    </div>

</>
  )
}
