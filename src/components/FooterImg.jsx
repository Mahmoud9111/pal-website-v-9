import React from "react";
import { Button } from "@/components/ui/button";

const FooterImg = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footerimg4.png')" }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Unlock your personal best.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          The Biograph Method is not just about extending your lifespan, it's about improving the quality of your life.
        </p>
        <div className="mt-6">
          <Button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Request an Invite
          </Button>
        </div>
      </div>
    </div>
  );
};



export default FooterImg;