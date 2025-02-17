"use client"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Add your login logic here
//   }

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-1/2 bg-blue-600 p-12 text-white hidden lg:flex flex-col justify-center"
      >
        <h2 className="text-4xl font-bold mb-12">Why sign in?</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">LIST YOUR PROPERTY</h3>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                01
              </div>
              <p className="text-lg">Collaborate and list your properties across devices</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">SAVED SEARCHES</h3>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                02
              </div>
              <p className="text-lg">Be the first to be notified when Private Property exclusive listings hit the market</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8"
      >
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Login to your account</h1>
            <p className="text-gray-600">Login to your account to unlock the benefits</p>
          </div>

          <form  className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot Password ?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Remember Me For 7 Days
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              LOGIN NOW
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Or Continue With
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage