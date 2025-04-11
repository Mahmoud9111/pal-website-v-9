"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CardProj } from "@/components/ui/cardProj"
import { Button } from "@/components/ui/button"
import {
  Bed,
  Bath,
  Square,
  Car,
  Share2,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ParkingMeterIcon as Parking,
  Bike,
  CableCarIcon as Elevator,
  Dumbbell,
} from "lucide-react"
import { useParams } from "react-router-dom"

// Mock Image component
const Image = ({ src, alt, layout, className }) => (
  <img src={src} alt={alt} className={className} />
);

export default function PropertyListing() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  // This would typically come from an API - for now we'll hardcode it
  const propertyData = {
    1: {
      title: "Pala Vista",
      images: [
        "/images/pala_img1.jpg",
        "/images/pala_img2.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture33.PNG-JyfMV9FlIyUOIY39VdQ7dCs4mTPSFo.png"
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    2: {
      title: "Drainage Improvements",
      images: [
        "/images/Projects/488/1.jpg",
        "/images/Projects/488/2.jpg",
        "/images/Projects/488/3.jpg",
        "/images/Projects/488/4.jpg",
        "/images/Projects/488/5.jpg",
        "/images/Projects/488/6.jpg",

        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    3: {
      title: "Pave. Maint and Repair",
      images: [
        "/images/Projects/506/1.JPG",
        "/images/Projects/506/2.JPG",
        "/images/Projects/506/3.JPG",
        "/images/Projects/506/4.JPG",
        "/images/Projects/506/5.JPG",
        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    4: {
      title: "Pave. Maint and Repair",
      images: [
        "/images/Projects/460/1.jpeg",
        "/images/Projects/460/2.jpeg",
        "/images/Projects/460/3.jpeg",

        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    5: {
      title: "Pave. Maint and Repair",
      images: [
        "/images/Projects//408/1.JPG",
        "/images/Projects//408/2.JPG",
        "/images/Projects//408/3.JPG",
        "/images/Projects//408/4.JPG",

        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    6: {
      title: "Conc. Barriers, MGS, Gore Paving",
      images: [
        "/images/Projects/354/1.jpg",
        "/images/Projects/354/2.jpg",
        "/images/Projects/354/3.JPG",
        "/images/Projects/354/4.jpg",
        "/images/Projects/354/5.jpeg",


        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    7: {
      title: "Remove X-Lite Terminals",
      images: [
        "/images/Projects/361/1.JPG",
        "/images/Projects/361/2.JPG",
        "/images/Projects/361/3.JPG",
        "/images/Projects/361/4.JPG",
        "/images/Projects/361/5.JPG",



        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    8: {
      title: "Lekos Coronado",
      images: [
        "/images/Projects/364/3.JPG",
        "/images/Projects/364/2.JPG",
        "/images/Projects/364/1.JPG",
        "/images/Projects/364/4.JPG",



        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    9: {
      title: "Local St Rehab 2020",
      images: [
        "/images/Projects/394/1.JPG",
        "/images/Projects/394/2.JPG",
        "/images/Projects/394/3.JPG",
        "/images/Projects/394/4.JPG",



        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    10: {
      title: "SR-163 x Ash",
      images: [
        "/images/Projects/399/1.jpg",
        "/images/Projects/399/2.jpg",
        "/images/Projects/399/3.jpg",
        "/images/Projects/399/4.jpg",
        "/images/Projects/399/5.jpg",



        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    11: {
      title: "FY 21-22 Pav. Mainte Repairs",
      images: [
        "/images/Projects/479/1.jpeg",
        "/images/Projects/479/2.jpeg",
        "/images/Projects/479/3.jpeg",
        "/images/Projects/479/4.jpeg",
        "/images/Projects/479/5.jpeg",



        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },

    12: {
      title: "Traffic Calming on Amargosa Dr.",
      images: [
        "/images/Projects/412/1.jpeg",
        "/images/Projects/412/2.jpeg",
        "/images/Projects/412/3.jpeg",
        "/images/Projects/412/4.jpeg",



        // ...more images...
      ],
      bedrooms: "Four",
      bathrooms: "Three",
      area: "1,33024 ft",
      parking: "Indoor",
      description: "This apartment is perfect for solo travellers, couples on a holiday, and even business travellers..."
    },
    



    // Add more properties as needed
  };

  const property = propertyData[id];

  if (!property) {
    return <div>Property not found</div>;
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="max-w-[1536px] mx-auto p-4 space-y-8 mt-32">


      {/* Updated Image Slider */}
      <div className="relative h-[700px] w-full overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {property.images.map((src, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={src}
                alt={`Property view ${index + 1}`}
                className="w-full h-[900px] object-cover"
              />
              {/* Gradient overlay and title only on first image */}
              {index === 0 && (
                <>
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />
                  <h1 className="absolute bottom-12 left-12 text-5xl font-semibold text-white">
                    {property.title}
                  </h1>
                </>
              )}
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
          onClick={previousImage}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
          onClick={nextImage}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>


            {/* Thumbnail Gallery */}
            <div className="overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {property.images.map((src, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 ${
                currentImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="h-20 w-32 object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>


      {/* Property Details Section */}
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Property Details</h2>
          <p className="text-gray-600">Everything you need to know about this property</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardProj className="p-4 flex items-center gap-2">
            <Bed className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Bedroom</p>
              <p className="font-semibold">{property.bedrooms}</p>
            </div>
          </CardProj>
          <CardProj className="p-4 flex items-center gap-2">
            <Bath className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Bathroom</p>
              <p className="font-semibold">{property.bathrooms}</p>
            </div>
          </CardProj>
          <CardProj className="p-4 flex items-center gap-2">
            <Square className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Area</p>
              <p className="font-semibold">{property.area}</p>
            </div>
          </CardProj>
          <CardProj className="p-4 flex items-center gap-2">
            <Car className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Parking</p>
              <p className="font-semibold">{property.parking}</p>
            </div>
          </CardProj>
        </div>
      </div>

      {/* Description */}
      <CardProj className="p-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 mb-4">
          {property.description}
        </p>
        <Button variant="ghost" className="flex items-center gap-1">
          Show More <ChevronDown className="h-4 w-4" />
        </Button>
      </CardProj>

      {/* Map */}
      <CardProj className="p-6">
        <h2 className="text-xl font-semibold mb-4">Space Location</h2>
        <div className="h-[500px] bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1681.466643682779!2d-116.94693704721892!3d32.55462566888299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947aca2de843b%3A0x637c240f29834c62!2s2295%20Harvest%20Rd%2C%20San%20Diego%2C%20CA%2092154%2C%20USA!5e0!3m2!1sen!2s!4v1739843909198!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CardProj>

    </div>     
  )
}

