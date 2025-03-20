export function LocationCard({ city, address, location, image }) {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 flex gap-3 backdrop-blur-sm w-full">
      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          alt={city}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-xl mb-1">{city}</h3>
        <p className="text-gray-500 text-sm leading-snug">{address}</p>
        <p className="text-gray-500 text-sm leading-snug">{location}</p>
      </div>
    </div>
  )
}
