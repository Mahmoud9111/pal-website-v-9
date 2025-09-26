
import { useState } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const properties = [
    {
      id: 1,
      name: "Pala Vista",
      location: "",
      image: "/images/pala_img2.jpg",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 2,
      name: "Drainage Improvements",
      location: "",

      image: "/images/Projects/488/2.jpg",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 3,
      name: "Pave. Maint and Repair",
      location: "",
      image: "/images/Projects/506/1.JPG",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 4,
      name: "Admin Front Entrance Concrete Repair",
      location: "",

      image: "/images/Projects/460/1.jpeg",
              
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 5,
      name: "Pedestrian Mobility Sidewalk Project",
      location: "",

      image: "/images/Projects//408/1.JPG",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 6,
      name: "Conc. Barriers, MGS, Gore Paving",
      location: "",

      image: "/images/Projects/354/1.jpg",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    {
      id: 7,
      name: "Remove X-Lite Terminals",
      location: "",

      image: "/images/Projects/361/3.JPG",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    {
      id: 8,
      name: "Lekos Coronado",
      location: "",

      image: "/images/Projects/364/3.JPG",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    {
      id: 9,
      name: "Local St Rehab 2020",
      location: "",

      image: "/images/Projects/394/1.JPG",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    {
      id: 10,
      name: "SR-163 x Ash",
      location: "",

      image: "/images/Projects/399/1.jpg",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    {
      id: 11,
      name: "FY 21-22 Pav. Mainte Repairs",
      location: "",

      image: "/images/Projects/479/1.jpeg",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    {
      id: 12,
      name: "Traffic Calming on Amargosa Dr.",
      location: "",

      image: "/images/Projects/412/1.jpeg",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
  ]

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProperties.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProperties.length / projectsPerPage)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="mb-12 mt-32">
          <h1 className="text-5xl font-bold">Our recent projects</h1>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="  rounded-lg flex items-center justify-start ">
            <div className="relative w-full max-w-md bg-gray-100">
              <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-900 " />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Search project name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {currentProjects.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-1 border-gray-200 hover:cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => handlePropertyClick(property.id)}
            >
              <div className="relative h-64 p-2 overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{property.location}</p>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">View</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                >
                  Previous
                </button>
              </li>
              {pageNumbers.map(number => (
                <li key={number}>
                  <button
                    onClick={() => setCurrentPage(number)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 
                      ${currentPage === number 
                        ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                        : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                      }`}
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  )
}

