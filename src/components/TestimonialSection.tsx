"use client"
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import Avt1 from "../../src/images/avt1.png"
import Avt2 from "../../src/images/avt2.png"
import Avt3 from "../../src/images/avt3.png"
import Avt4 from "../../src/images/avt4.png"
import Avt5 from "../../src/images/avt5.png"
import Avt6 from "../../src/images/avt6.png"
import Avt7 from "../../src/images/avt7.png"
import Avt8 from "../../src/images/avt8.png"
import Avt9 from "../../src/images/avt9.png"
import Avt10 from "../../src/images/avt10.png"
import { useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Tenant",
    image: Avt1,
    quote: "SmartRent made finding my dream apartment a breeze. The AI matching was spot-on!"
  },
  {
    name: "Michael Lee",
    role: "Property Owner",
    image: Avt2,
    quote: "As a landlord, SmartRent has simplified my rental process. Highly recommended!"
  },
  {
    name: "Emily Chen",
    role: "First-time Renter",
    image: Avt3,
    quote: "The virtual tours saved me so much time. I found the perfect place without leaving my home!"
  },
  {
    name: "David Wilson",
    role: "Real Estate Investor",
    image: Avt4,
    quote: "SmartRent's AI-driven approach has revolutionized how I manage my property portfolio."
  },
  {
    name: "Jessica Martinez",
    role: "Student Renter",
    image: Avt5,
    quote: "The affordability calculator helped me find a place within my budget. Amazing service!"
  },
  {
    name: "Robert Taylor",
    role: "Property Manager",
    image: Avt6,
    quote: "The automated screening process has saved us countless hours. Simply brilliant!"
  },
  {
    name: "Lisa Wong",
    role: "Recent Graduate",
    image: Avt7,
    quote: "Found my first post-college apartment through SmartRent. Could not have been easier!"
  },
  {
    name: "James Anderson",
    role: "Commercial Property Owner",
    image: Avt8,
    quote: "The analytics dashboard gives me insights I never had before. Game-changing platform!"
  },
  {
    name: "Maria Garcia",
    role: "Working Professional",
    image: Avt9,
    quote: "The mobile app makes managing my rental applications so convenient. Highly satisfied!"
  },
  {
    name: "Alex Thompson",
    role: "Digital Nomad",
    image: Avt10,
    quote: "Being able to virtual tour properties across different cities saved me so much time!"
  },
  {
    name: "Patricia Brown",
    role: "Senior Citizen",
    image: Avt1,
    quote: "The interface is so user-friendly. I found my retirement home without any stress!"
  },
  {
    name: "Kevin Zhang",
    role: "International Student",
    image: Avt1,
    quote: "The multilingual support made it easy to find housing before arriving in the country."
  }
];

export default function TestimonialSection() {
  const controls = useAnimationControls();
  
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -3000],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }
      });
    };
    
    startAnimation();
  }, [controls]);

  return (
    <section className="py-20 bg-indigo-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">
          What Our Users Say
        </h2>
        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 w-80 flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}