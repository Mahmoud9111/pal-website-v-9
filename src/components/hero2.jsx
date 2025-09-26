import { useEffect, useState } from "react"
import { ArrowUpRight } from 'lucide-react'
import { Link } from "react-router-dom"  // Add this import

export default function Hero2() {
  const [shrinkFactor, setShrinkFactor] = useState(1)
  const [borderRadius, setBorderRadius] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "/images/heroimg2.avif",
    "/images/heroimg3.avif",
    "/images/heroimg4.avif",
  ]


  useEffect(() => {
    if (window.innerWidth >= 768) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 8000);

      return () => clearInterval(intervalId);
    }
  }, [images.length]);

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
        <div className="w-full h-screen transition-all duration-700 ease-out relative overflow-hidden"
            style={{
              transform: `scale(${shrinkFactor})`,
              borderRadius: `${borderRadius}px`
            }}>
            {window.innerWidth < 768 ? (
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={images[0]}
                  alt="Hero image"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: `${borderRadius}px` }}
                />
              </div>
            ) : (
              images.map((img, index) => (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: currentImageIndex === index ? 1 : 0,
                  }}
                >
                  <img
                    src={img}
                    alt={`Hero image ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: `${borderRadius}px` }}
                  />
                </div>
              ))
            )}
            
            <div className="absolute inset-0 bg-black/30 z-10"
                 style={{ borderRadius: `${borderRadius}px` }}>
              <div className="h-full flex items-center">
                <div className="max-w-[1536px] mx-auto w-full px-4 sm:px-6 lg:px-16">
                  <div className="max-w-[900px] mx-auto text-center mb-64">   {/* Added mx-auto and text-center */}

                    <h1 className="text-3xl sm:text-5xl lg:text-[62px] leading-[1.1] font-bold mb-4 sm:mb-6 text-white">
                      Socal Asphalt Paving <span className="">Leaders</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-medium max-w-[600px] mx-auto mb-6 sm:mb-8">  {/* Added mx-auto */}
                      Expert paving and construction services delivering superior results. 
                      From driveways to commercial projects, we build with precision and pride.
                    </p>
                    <div className="flex justify-center">  {/* Added wrapper div for button centering */}
                      <Link 
                        to="/contactus" 
                        className="group relative bg-transparent text-white max-w-[200px] hover:bg-white/5 rounded-full px-2.5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-md border border-white/10 flex items-center justify-center"
                      >
                        Contact us
                        <span className="ml-2 bg-blue-700 rounded-full p-1.5 sm:p-2.5 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          <ArrowUpRight className="h-5 w-5 sm:h-4 sm:w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                      {/* Image thumbnails - Only show on desktop */}
          {window.innerWidth >= 768 && (
            <div className="absolute bottom-12 left-12 z-20 flex gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-32 h-24 overflow-hidden rounded-lg border-2 transition-all ${
                    currentImageIndex === index ? 'border-white scale-110' : 'border-white/50 hover:border-white/80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          </div>



          {/* Mouse scroll indicator */}
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
