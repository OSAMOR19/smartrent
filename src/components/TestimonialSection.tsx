"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Avt1 from "../../src/images/avt3.png"
import Avt2 from "../../src/images/avt4.png"
import Avt3 from "../../src/images/avt5.png"
import Avt4 from "../../src/images/avt6.png"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Tenant",
    image: Avt1,
    quote: "SmartRent made finding my dream apartment a breeze. The AI matching was spot-on!",
  },
  {
    name: "Michael Lee",
    role: "Property Owner",
    image: Avt2,
    quote: "As a landlord, SmartRent has simplified my rental process. Highly recommended!",
  },
  {
    name: "Emily Chen",
    role: "First-time Renter",
    image: Avt3,
    quote: "The virtual tours saved me so much time. I found the perfect place without leaving my home!",
  },
  {
    name: "David Wilson",
    role: "Real Estate Investor",
    image: Avt4,
    quote: "SmartRent's AI-driven approach has revolutionized how I manage my property portfolio.",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold dark:text-gray-100">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

