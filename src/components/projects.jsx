"use client"

import { useState } from "react"
import { ChevronDown, Filter, Star, Search } from "lucide-react"
import { useNavigate } from "react-router-dom";
import React from 'react'

export default function Projects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const properties = [
    {
      id: 1,
      name: "Yasmin Villa - Arabian Hill",
      location: "Apartment in Dubai 2BR Apartment in Al Barsha",
      rating: 4.98,
      price: 216,
      image: "/public/images/pala_img2.jpg",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 2,
      name: "Abu Hail - Arabian Ran",
      location: "Apartment in Dubai 2BR Apartment in Al Barsha",
      rating: 4.98,
      price: 216,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture67.PNG-XCPaEon8hKlg03qewaBFDMS0yyd6HU.png",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 3,
      name: "Al Barsha Third",
      location: "Apartment in Dubai 2BR Apartment in Al Barsha",
      rating: 4.98,
      price: 216,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture67.PNG-XCPaEon8hKlg03qewaBFDMS0yyd6HU.png",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 4,
      name: "Al Barsha Fourth",
      location: "Apartment in Dubai 2BR Apartment in Al Barsha",
      rating: 4.98,
      price: 216,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture67.PNG-XCPaEon8hKlg03qewaBFDMS0yyd6HU.png",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 5,
      name: "Al Barsha Fifth",
      location: "Apartment in Dubai 2BR Apartment in Al Barsha",
      rating: 4.98,
      price: 216,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture67.PNG-XCPaEon8hKlg03qewaBFDMS0yyd6HU.png",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    {
      id: 6,
      name: "Al Barsha Sixth",
      location: "Apartment in Dubai 2BR Apartment in Al Barsha",
      rating: 4.98,
      price: 216,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture67.PNG-XCPaEon8hKlg03qewaBFDMS0yyd6HU.png",
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    }
  ]

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="text-center mb-12 mt-32">
          <p className="text-gray-600 mb-4">Our recent projects</p>
          <h1 className="text-5xl font-bold">Best Properties of the years</h1>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Rent a House in Dubai</h2>
          <div className=" p-6 rounded-lg flex items-center justify-start">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search project name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredProperties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-1 border-gray-200 cursor-pointer"
              onClick={() => handlePropertyClick(property.id)}
            >
              <div className="relative h-64 p-2">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{property.location}</p>
                <button className="px-4 py-2 bg-black text-white rounded-md">View</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

