"use client";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaVrCardboard,
  FaHandshake,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { useState, useEffect } from "react";
import AISearchForm from "../components/AISearchForm";
import VRTourSection from "../components/VRTourSection";
import TestimonialSection from "../components/TestimonialSection";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from 'next/navigation';
import Link from "next/link";




interface Link{
  videoSrc: any;
  children: any;
  className: any;


}
// Separate VideoBackground component
const VideoBackground = ({ videoSrc, children, className }: Link) => {
  return (
    <div className={`relative ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

// Carousel Component
const Carousel = () => {
  const slides = [
    {
      title: "For Tenants",
      description: "Find affordable homes with no agent stress.",
      icon: "🏠",
    },
    {
      title: "For Landlords",
      description: "List properties and get matched with genuine tenants.",
      icon: "🏢",
    },
    {
      title: "For Investors",
      description: "Manage and rent properties faster.",
      icon: "💼",
    },
    {
      title: "For Diaspora Nigerians",
      description: "Secure homes remotely without being scammed.",
      icon: "🌍",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Who Can Use SmartRent?
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex justify-center">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-xl max-w-2xl"
            >
              <div className="text-center">
                <span className="text-5xl mb-4 block">
                  {slides[currentSlide].icon}
                </span>
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {slides[currentSlide].description}
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-indigo-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Tell Us What You Want",
      description: "Enter your budget, preferred location, and house features.",
    },
    {
      number: "2️⃣",
      title: "AI House Matching",
      description:
        "Our smart AI scans available properties and finds the best fit for you.",
    },
    {
      number: "3️⃣",
      title: "VR & 360° House Viewing",
      description: "View properties virtually before scheduling a visit.",
    },
    {
      number: "4️⃣",
      title: "Direct Contact with Landlords",
      description: "No middlemen, no hidden charges.",
    },
    {
      number: "5️⃣",
      title: "Secure Payment System",
      description: "Pay rent directly through our verified platform.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 text-gray-800 dark:text-gray-200">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
        {/* Header content remains the same */}
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <HiOutlineHome className="text-3xl text-indigo-600 mr-2" />
            <span className="text-2xl font-bold text-indigo-600">
              SmartRent
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Find a Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              List Property
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
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
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Link href='/Login'>
            Get Started
            </Link>
          </button>
        </nav>
      </header>

      <main>
        <VideoBackground
          videoSrc="/videos/walkthrough.mp4"
          className="min-h-screen"
        >
          <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto text-center">
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block">Affordable Housing</span>
                <span className="block">Without the Middleman</span>
              </motion.h1>
              <motion.p
                className="text-xl mb-10 text-gray-200"
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
                <button className="bg-indigo-600 text-white text-lg px-10 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Find Your Home Now
                </button>
              </motion.div>
            </div>
          </section>

          <AISearchForm />
        </VideoBackground>

        <Carousel />

        <HowItWorks />

        <VRTourSection />

        <TestimonialSection />

        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Find Your Perfect Home?
            </h2>
            <button className="bg-white text-indigo-600 text-lg px-10 py-3 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <HiOutlineHome className="text-3xl text-white inline-block mr-2" />
              <span className="text-2xl font-bold">SmartRent</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-indigo-400 transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition duration-300"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-indigo-400 transition duration-300"
              >
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2025 SmartRent. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
