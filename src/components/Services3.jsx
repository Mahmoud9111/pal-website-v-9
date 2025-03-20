import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Services3() {
  const services = [
    {
      title: "Renewable Energy Solutions",
      description:
        "Embrace the power of clean energy with our advanced renewable solutions. From solar panels to sustainable grid technologies.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rstyhsrdt.PNG-EQDpEiBZzY4pYX3l6kSbHgMRCxheFd.png",
    },
    {
      title: "Eco-Friendly Manufacturing",
      description: "Transform your production processes with our sustainable manufacturing solutions.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rstyhsrdt.PNG-EQDpEiBZzY4pYX3l6kSbHgMRCxheFd.png",
    },
    {
      title: "Environmental Consulting Services",
      description:
        "Navigate the complexities of environmental regulation with our expert consulting services. We provide comprehensive assessments and strategic planning.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rstyhsrdt.PNG-EQDpEiBZzY4pYX3l6kSbHgMRCxheFd.png",
    },
    {
        title: "Environmental Consulting Services",
        description:
          "Navigate the complexities of environmental regulation with our expert consulting services. We provide comprehensive assessments and strategic planning.",
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
            We are dedicated to providing the best services in the sustainability manufacturing industry. Our commitment
            to excellence is reflected in our innovative practices, cutting-edge technology, and a passionate team of
            experts.
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

