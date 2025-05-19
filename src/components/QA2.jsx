"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// FaqSection Component
const FaqSection = React.forwardRef(({ className, title, description, items, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-12 md:py-16 w-full bg-white text-black", className)}
      {...props}
    >
      <div className="container max-w-[1480px] mx-auto p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-left" // Added text-left class
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-black text-left">
            {title}
          </h2>
          {description && <p className="text-base text-gray-600 max-w-2xl text-left">{description}</p>}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-[1480px] mx-auto text-left space-y-3">
          {items.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
})
FaqSection.displayName = "FaqSection"

// Internal FaqItem component
const FaqItem = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { question, answer, index } = props

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-xl",
        "transition-all duration-200 ease-in-out",
        "border border-gray-200",
        isOpen ? "bg-gray-50" : "hover:bg-gray-50/50",
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 h-auto text-left flex items-start hover:bg-transparent text-black"
      >
        <h3
          className={cn(
            "text-lg font-medium transition-colors duration-200",
            "text-gray-600 flex-1",
            isOpen && "text-black",
          )} 
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-8 pb-6 pt-3">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-base text-gray-600 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})
FaqItem.displayName = "FaqItem"

// Main FAQ Component with example data
function FAQ() {
  const faqItems = [
    {
      question: "What general engineering services do you provide?",
      answer: "Our comprehensive engineering solutions encompass structural design, project management, and infrastructure development. We excel in civil, mechanical, and environmental engineering projects, delivering expert solutions for complex engineering challenges across various sectors.",
    },
    {
      question: "What are your asphalt specialization services?",
      answer: "We provide complete asphalt services including professional installation, routine maintenance, repairs, seal coating, striping, and petromat overlay. Our team specializes in parking lot improvements and resurfacing, ensuring durable and high-quality results for all surfaces.",
    },
    {
      question: "How do you handle ADA compliance and fine grading?",
      answer: "We deliver expert ADA compliance solutions combined with precision fine grading services. Our team ensures your property meets all accessibility requirements while maintaining perfect surface levels. We focus on creating safe, compliant, and properly graded spaces for all users.",
    },
    {
      question: "What electrical and landscaping services do you offer?",
      answer: "Our services include comprehensive electrical solutions and professional landscaping for all property types. From electrical infrastructure upgrades to creating beautiful outdoor spaces, we handle everything from installation to maintenance, ensuring safety and aesthetics.",
    },
    {
      question: "What makes PAL General Engineering unique in the industry?",
      answer: "Our unique strength lies in offering integrated solutions across general engineering, asphalt services, ADA compliance, electrical work, and landscaping. This comprehensive approach, combined with our expertise and commitment to quality, allows us to handle complex projects efficiently while maintaining the highest standards.",
    },
  ]

  return (
    <main className="py-12 bg-white">
      <FaqSection
        title="Why Choose the Market Leader"
        description="Discover why PAL General Engineering leads the industry in comprehensive construction and engineering services."
        items={faqItems}
      />
    </main>
  )
}

// Export both components
export { FaqSection }
export default FAQ

