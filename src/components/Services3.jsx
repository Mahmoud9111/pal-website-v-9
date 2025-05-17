import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Services3() {
  const services = [
    {
      title: "Excavation & Underground Services",
      description:
        "Professional excavation services and underground utility installations for residential, commercial, and industrial projects. We ensure precise execution and safety compliance.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rstyhsrdt.PNG-EQDpEiBZzY4pYX3l6kSbHgMRCxheFd.png",
    },
    {
      title: "Asphalt & Parking Solutions",
      description: "Complete asphalt services including installation, maintenance, repairs, seal coating, striping, and petromat overlay. We specialize in parking lot improvements and resurfacing.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rstyhsrdt.PNG-EQDpEiBZzY4pYX3l6kSbHgMRCxheFd.png",
    },
    {
      title: "ADA Compliance & Fine Grading",
      description:
        "Expert ADA compliance solutions and precision fine grading services. We ensure your property meets all accessibility requirements while maintaining perfect surface levels.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rstyhsrdt.PNG-EQDpEiBZzY4pYX3l6kSbHgMRCxheFd.png",
    },
    {
      title: "Electrical & Landscaping",
      description:
        "Comprehensive electrical services and professional landscaping solutions for all property types. From infrastructure upgrades to beautiful outdoor spaces, we deliver excellence.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rstyhsrdt.PNG-EQDpEiBZzY4pYX3l6kSbHgMRCxheFd.png",
    },
  ]

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const subtitleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-[1536px] mx-auto space-y-16">
        <div className="space-y-4">
          <motion.h2 
            className="text-4xl font-medium tracking-tight"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Providing
            <br />
            Best Services
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl"
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We are dedicated to providing exceptional construction and maintenance services across residential, commercial, and industrial sectors. Our commitment to excellence is reflected in our precise workmanship, state-of-the-art equipment, and our experienced team of professionals.
          </motion.p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="group hover:bg-accent/5 transition-all transform hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-[300px_1fr_auto] items-center gap-6 p-6">
                    <div className="relative h-48 md:h-40 overflow-hidden rounded-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

