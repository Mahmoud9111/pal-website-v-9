"use client"

export function Loader() {
  return (
    <div className="w-12 h-12 block mx-auto my-4 relative text-white box-border animate-loader-rotation">
      <div
        className="after:content-[''] after:box-border after:absolute after:w-6 after:h-6 after:top-0 after:bg-white after:rounded-full after:animate-loader-scale
                    before:content-[''] before:box-border before:absolute before:w-6 before:h-6 before:bottom-0 before:bg-[#FF3D00] before:rounded-full before:animate-loader-scale-delayed"
      ></div>
    </div>
  )
}

