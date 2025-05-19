import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Services3() {
  const services = [
    {
      title: "General Engineering projects",
      description:
        "Comprehensive engineering solutions encompassing structural design, project management, and infrastructure development. We handle diverse projects with expertise in civil, mechanical, and environmental engineering.",
      image: "/images/Services/Service1.jpg",
    },
    {
      title: "Asphalt Specialist",
      description: "Complete asphalt services including installation, maintenance, repairs, seal coating, striping, and petromat overlay. We specialize in parking lot improvements and resurfacing.",
      image: "/images/Services/Service2.jpg",
    },
    {
      title: "ADA Compliance & Fine Grading",
      description:
        "Expert ADA compliance solutions and precision fine grading services. We ensure your property meets all accessibility requirements while maintaining perfect surface levels.",
      image: "/images/Services/Service3.png",
    },
    {
      title: "Electrical & Landscaping",
      description:
        "Comprehensive electrical services and professional landscaping solutions for all property types. From infrastructure upgrades to beautiful outdoor spaces, we deliver excellence.",
      image: "/images/Services/Service4.jpeg",
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
        <div className="space-y-4  p-4">
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
                  <div className="grid grid-cols-1 md:grid-cols-[450px_1fr_auto] items-center gap-8 p-2">
                    <div className="relative h-72 md:h-64 overflow-hidden rounded-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4 py-2">
                      <h3 className="text-3xl font-medium">{service.title}</h3>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>
                    <div className="flex items-center justify-end">
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

