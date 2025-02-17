"use client"
import { motion } from "framer-motion"
import { FaRobot, FaVrCardboard, FaHandshake, FaSun, FaMoon } from "react-icons/fa"
import { HiOutlineHome } from "react-icons/hi"
import AISearchForm from "../components/AISearchForm"
import VRTourSection from "../components/VRTourSection"
import TestimonialSection from "../components/TestimonialSection"
import { useTheme } from "../context/ThemeContext"

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 text-gray-800 dark:text-gray-200">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <HiOutlineHome className="text-3xl text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SmartRent</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            >
              Find a Home
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            >
              List Property
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
            >
              How It Works
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Started
          </button>
        </nav>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">Affordable Housing</span>
              <span className="block">Without the Middleman</span>
            </motion.h1>
            <motion.p
              className="text-xl mb-10 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find your dream home instantly with AI-powered matching
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-indigo-600 dark:bg-indigo-500 text-white text-lg px-10 py-3 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Find Your Home Now
              </button>
            </motion.div>
          </div>
        </section>

        <AISearchForm />

        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">How SmartRent Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: FaRobot,
                  title: "AI Matching",
                  description: "Our smart AI finds the best home for you based on your preferences",
                },
                {
                  icon: FaVrCardboard,
                  title: "Virtual Tours",
                  description: "Experience properties through immersive VR and 360° tours",
                },
                {
                  icon: FaHandshake,
                  title: "Direct Contact",
                  description: "Connect with landlords directly, no middlemen involved",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <feature.icon className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <VRTourSection />

        <TestimonialSection />

        <section className="py-20 bg-indigo-600 dark:bg-indigo-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Find Your Perfect Home?</h2>
            <button className="bg-white dark:bg-gray-200 text-indigo-600 dark:text-indigo-800 text-lg px-10 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-300 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <HiOutlineHome className="text-3xl text-white inline-block mr-2" />
              <span className="text-2xl font-bold">SmartRent</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                About
              </a>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                Contact
              </a>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                Privacy
              </a>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">© 2023 SmartRent. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

