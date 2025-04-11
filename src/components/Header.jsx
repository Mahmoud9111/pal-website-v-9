import { ChevronDown, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Only run on desktop
      if (window.innerWidth >= 768) {
        const currentScrollPos = window.pageYOffset
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const MenuIcon = ({ isOpen }) => (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      transition={{ duration: 0.3 }}
    >
      <motion.line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          x1: isOpen ? 6 : 4,
          y1: isOpen ? 18 : 6,
          x2: isOpen ? 18 : 20,
          y2: isOpen ? 6 : 6
        }}
      />
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          opacity: isOpen ? 0 : 1
        }}
      />
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          x1: isOpen ? 6 : 4,
          y1: isOpen ? 6 : 18,
          x2: isOpen ? 18 : 20,
          y2: isOpen ? 18 : 18
        }}
      />
    </motion.svg>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      !visible ? '-translate-y-full md:-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="container mx-auto px-4 py-3 mt-3">
        <div className="flex h-16 items-center justify-between backdrop-blur-xl bg-white/50 rounded-2xl px-3">
          {/* Logo */}
          <Link to="/" className="flex items-center font-semibold text-black ">
            <span className="ml-2">PAL Engineering </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12 rounded-2xl p-4 ">
            <Link to="/home" className="text-sm hover:text-gray-800 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm hover:text-gray-800 transition-colors">
              Projects
            </Link>
            <Link to="/aboutus" className="text-sm hover:text-gray-800 transition-colors">
              About us
            </Link>
            <Link to="/contactus" className="text-sm hover:text-gray-800 transition-colors">
              Contact us
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md bg-orange-500 backdrop-blur-sm px-4 text-sm font-medium text-white shadow transition-colors hover:bg-orange-500"
              >
                Contact us
              </Link>
            </div>
            <button 
              className="md:hidden p-2 hover:bg-white/20 rounded-full transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-x-0 top-[5.5rem] p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg space-y-4">
                <Link 
                  to="/home" 
                  className="block px-4 py-3 text-sm hover:bg-orange-50 rounded-xl transition-colors hover:text-orange-500"
                >
                  Home
                </Link>
                <Link 
                  to="/projects" 
                  className="block px-4 py-3 text-sm hover:bg-orange-50 rounded-xl transition-colors hover:text-orange-500"
                >
                  Projects
                </Link>
                <Link 
                  to="/aboutus" 
                  className="block px-4 py-3 text-sm hover:bg-orange-50 rounded-xl transition-colors hover:text-orange-500"
                >
                  About us
                </Link>
                <Link 
                  to="/contactus" 
                  className="block px-4 py-3 text-sm hover:bg-orange-50 rounded-xl transition-colors hover:text-orange-500"
                >
                  Contact us
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition-colors text-center"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

