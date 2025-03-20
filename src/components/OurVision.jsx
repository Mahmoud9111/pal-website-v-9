import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function OurVision() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Vision
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          We envision a future where technology and innovation come together to create meaningful solutions.
        </p>
      </div>
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[28rem]">
        <BentoGridItem
          titleClassName="text-5xl font-bold mb-4"
          descriptionClassName="text-xl text-gray-600"
          title="Vision 1"
          description="Leading the way in digital transformation with cutting-edge solutions"
          className="md:col-span-2 p-8"
        />
        <BentoGridItem
          titleClassName="text-3xl font-bold mb-4"
          descriptionClassName="text-xl text-gray-600"
          title="Vision 2"
          description="Building sustainable technology for tomorrow's challenges"
          className="md:col-span-1 p-8"
        />
        <BentoGridItem
          titleClassName="text-3xl font-bold mb-4"
          descriptionClassName="text-xl text-gray-600"
          title="Vision 3"
          description="Empowering businesses through innovative solutions"
          className="md:col-span-1 p-8"
        />
        <BentoGridItem
          titleClassName="text-3xl font-bold mb-4"
          descriptionClassName="text-xl text-gray-600"
          title="Vision 4"
          description="Creating meaningful impact through technology"
          className="md:col-span-2 p-8"
        />
      </BentoGrid>
    </div>
  );
}




