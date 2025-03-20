"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";

export default function QA() {
  console.log("Rendering QA component");
  return (
    <div className="max-w-[1536px] mx-auto p-2 bg-white">
      <div className="flex justify-between items-center mb-10">
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">FAQ</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            Our experts guide you in making informed investment decisions based on market insights. We offer residential,
            commercial, and luxury properties tailored to different preferences and budgets.
          </p>
        </div>
        <button className="shadow-lg border border-gray-200 group relative bg-transparent text-black rounded-full px-6 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-md flex items-center justify-center">
          See All Properties
          <span className="ml-2 bg-orange-500  rounded-full p-3 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </span>
        </button>
      </div>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="consultation">
            <AccordionTrigger className="text-xl py-4 hover:no-underline">
              Consultation & Trip Planning
            </AccordionTrigger>
            <AccordionContent className="text-lg pt-3 pb-4">
              Our expert team will work with you to understand your preferences and create the perfect travel plan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="itinerary">
            <AccordionTrigger className="text-xl py-4 hover:no-underline">
              Customized Itinerary & Booking
            </AccordionTrigger>
            <AccordionContent className="text-lg pt-3 pb-4">
              Get a personalized travel itinerary tailored to your interests, timeline, and budget.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment">
            <AccordionTrigger className="text-xl py-4 hover:no-underline">
              Seamless Payment & Confirmation
            </AccordionTrigger>
            <AccordionContent className="text-lg pt-3 pb-4">
              Once your itinerary is confirmed, we provide secure payment options. After payment, you receive all
              travel documents, confirmations, and any necessary travel tips to ensure your journey is smooth from the
              start.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support">
            <AccordionTrigger className="text-xl py-4 hover:no-underline">
              Journey Assistance & Support
            </AccordionTrigger>
            <AccordionContent className="text-lg pt-3 pb-4">
              Our team is available to provide support and assistance throughout your journey.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment">
            <AccordionTrigger className="text-xl py-4 hover:no-underline">
              Seamless Payment & Confirmation
            </AccordionTrigger>
            <AccordionContent className="text-lg pt-3 pb-4">
              Once your itinerary is confirmed, we provide secure payment options. After payment, you receive all
              travel documents, confirmations, and any necessary travel tips to ensure your journey is smooth from the
              start.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
}

