import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import OurStory from './OurStory';
import { OurVision } from "./OurVision";


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
            src="/images/5.jpg"
            alt="About us header image"
            className="w-screen h-full object-cover transition-all duration-500 ease-out"
            style={{ borderRadius: `${borderRadius}px` }}
          />
          <div 
            className="absolute inset-0 bg-black/30"
            style={{ borderRadius: `${borderRadius}px` }}
          >
            <div className="h-full flex items-center">
              <div className="max-w-[1536px] mx-auto w-full px-16">
                <div className="max-w-[800px]">
                  <p className="text-white/80 text-sm mb-3 uppercase tracking-wider font-semibold bg-gradient-to-r from-white/50 to-white/5 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                    Welcome to our world
                  </p>
                  <h1 className="text-[72px] leading-[1.1] font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-gray-900 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">About us</h1>
                  <p className="text-lg text-white/80 leading-normal font-medium max-w-[500px]">
                    Through innovative technology and creative expertise, we transform 
                    businesses into digital leaders. Our solutions drive growth, enhance 
                    user experience, and deliver measurable results.
                  </p>
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
        

      </div>
    </div>

    <OurStory/>
    <OurVision/>
</>
  )
}

