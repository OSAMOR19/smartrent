import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaHome, FaMoneyBill, FaSearch, FaSpinner } from 'react-icons/fa';

const AISearchForm = () => {
  const [location, setLocation] = useState<string>('');
  const [budget, setBudget] = useState<number>(500000);
  const [propertyType, setPropertyType] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  const locations = {
    'Lagos Island': [
      'Victoria Island',
      'Lekki Phase 1',
      'Ikoyi',
      'Ajah',
      'Banana Island',
      'Eko Atlantic'
    ],
    'Lagos Mainland': [
      'Yaba',
      'Surulere',
      'Ikeja',
      'Maryland',
      'Gbagada',
      'Magodo',
      'Ogudu',
      'Ojota',
      'Ilupeju'
    ]
  };

  const propertyTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'duplex', label: 'Duplex' },
    { value: 'studio', label: 'Studio Apartment' },
    { value: 'terrace', label: 'Terrace' },
    { value: 'bungalow', label: 'Bungalow' }
  ];

  const formatNaira = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-4xl mx-auto -mt-16 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
        Find Your Perfect Lagos Home
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location Selector */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Location
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
              <select
                value={location}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Location</option>
                <optgroup label="Lagos Island">
                  {locations['Lagos Island'].map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </optgroup>
                <optgroup label="Lagos Mainland">
                  {locations['Lagos Mainland'].map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Budget: {formatNaira(budget)}
            </label>
            <div className="relative">
              <FaMoneyBill className="absolute top-3 left-3 text-gray-400" />
              <input
                type="range"
                min="100000"
                max="100000000"
                step="100000"
                value={budget}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-4"
                style={{
                  background: `linear-gradient(to right, 
                    rgb(99, 102, 241) 0%,
                    rgb(99, 102, 241) ${(budget / 100000000) * 100}%,
                    rgb(229, 231, 235) ${(budget / 100000000) * 100}%,
                    rgb(229, 231, 235) 100%)`
                }}
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Property Type
            </label>
            <div className="relative">
              <FaHome className="absolute top-3 left-3 text-gray-400" />
              <select
                value={propertyType}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setPropertyType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Property Type</option>
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2 text-lg font-semibold disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              <span>Searching...</span>
            </>
          ) : (
            <>
              <FaSearch className="mr-2" />
              <span>Search with AI</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default AISearchForm;