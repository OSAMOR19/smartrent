"use client"
import { motion } from "framer-motion"

export default function VRTourSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Experience Homes in VR</h2>
            <p className="text-xl text-gray-600 mb-6">
              Take virtual tours of properties from the comfort of your home. Our immersive VR experience lets you
              explore every corner before scheduling a visit.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Try VR Tour Now
            </button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
              <video className="w-full h-full object-cover rounded-xl" controls autoPlay loop muted playsInline>
                <source src="/videos/walkthrough.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

