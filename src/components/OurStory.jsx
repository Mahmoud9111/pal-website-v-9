import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="max-w-[1536px]">
          <p className="text-neutral-800 text-base md:text-lg font-medium mb-8">
            Completed major highway rehabilitation project with innovative concrete solutions
          </p>
          <div>
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              loading="lazy"
              className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 text-base md:text-lg font-medium mb-8">
            Expanded our paving operations with state-of-the-art equipment acquisition
          </p>
          <p className="text-neutral-800 text-base md:text-lg font-medium mb-8">
            Successfully completed multiple commercial and industrial concrete projects across the region
          </p>
          <div>
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              loading="lazy"
              className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Achievements",
      content: (
        <div>
          <p className="text-neutral-800 text-base md:text-lg font-medium mb-4">
            Key milestones in construction excellence
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-sm md:text-base">
              ✅ Major highway reconstruction project
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-sm md:text-base">
              ✅ Industrial concrete foundations
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-sm md:text-base">
              ✅ Commercial parking facilities
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-sm md:text-base">
              ✅ Municipal infrastructure upgrades
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-sm md:text-base">
              ✅ Residential development projects
            </div>
          </div>
          <div>
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              loading="lazy"
              className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
