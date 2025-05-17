import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-white shadow-2xl rounded-t-3xl">
      <div className="max-w-[1536px] mx-auto">
        {/* Logo and Description */}
        <div className="mb-8 sm:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
          <div>
            <img src="/images/PAL_Logo.png" alt="PAL Engineering" className="h-32" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="#contact"
              className="inline-flex h-16 sm:h-32 w-full sm:w-64 relative rounded-xl bg-[#1c60ff] px-4 hover:bg-[#0044e4]/90 transition-colors"
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
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-blue-500 mb-3 sm:mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/about" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-blue-500 mb-3 sm:mb-4">COMPANY</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-sm sm:text-base text-gray-600">
                PAL General Engineering Inc.
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=9939+Hibert+St.+Ste+201+San+Diego,+CA,+92131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-500"
                >
                  9939 Hibert St. Ste 201 San Diego, CA, 92131
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-blue-500 mb-3 sm:mb-4">CONTACT</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="tel:+18588605300" className="text-sm sm:text-base text-gray-600 hover:text-gray-500 flex items-center gap-2">
                  (858) 860-5300
                </a>
              </li>
              <li>
                <a href="tel:+18588605556" className="text-sm sm:text-base text-gray-600 hover:text-gray-500 flex items-center gap-2">

                  (858) 860-5556
                </a>
              </li>
              <li>
                <Link to="mailto:info@palsd.com" className="text-sm sm:text-base text-gray-600 hover:text-gray-500">
                   info@palsd.com
                </Link>
              </li>
            </ul>
          </div>


        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © Copyright 2025 PAL General Engineering Inc. Lic#916931
          </p>
        </div>
      </div>
    </footer>
  )
}

