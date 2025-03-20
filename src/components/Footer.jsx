import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-white shadow-2xl rounded-t-3xl">
      <div className="max-w-[1536px] mx-auto">
        {/* Logo and Description */}
        <div className="mb-8 sm:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
          <div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-3">PAL</h2>
            <p className="text-gray-600 max-w-md text-sm sm:text-base">
              Collaborative, strategic, and results-driven process to elevate your brand and drive growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="#contact"
              className="inline-flex h-16 sm:h-32 w-full sm:w-64 relative rounded-xl bg-[#FF4D1C] px-4 hover:bg-[#FF4D1C]/90 transition-colors"
            >
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-4 left-4 text-sm sm:text-base text-white">Contact with us</p>
            </Link>
            <Link
              to="#schedule"
              className="inline-flex h-16 sm:h-32 w-full sm:w-64 relative rounded-xl bg-gray-100 px-4 hover:bg-gray-200 transition-colors"
            >
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-gray-200/50 backdrop-blur-sm flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-4 left-4 text-sm sm:text-base text-gray-600">Schedule a call</p>
            </Link>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4">PRODUCT</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Marketing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Packaging
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4">COMPANY</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4">SOCIAL</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4">SUPPORT</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="tel:(410)630-2397" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  (410) 630-2397
                </Link>
              </li>
              <li>
                <Link to="mailto:support@lingly.com" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  support@lingly.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

