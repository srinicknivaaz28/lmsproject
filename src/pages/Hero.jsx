import React, { useState, useEffect } from 'react';
import { BookOpen, PlayCircle, Users, ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 overflow-hidden">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-300 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                New Features Available
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Elevate Your Learning Experience
            </h1>
            
            <p className="text-xl text-indigo-100 max-w-lg">
              Unlock unlimited access to premium courses, expert instructors, and a community of passionate learners.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-indigo-800 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 flex items-center shadow-lg shadow-indigo-900/20">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center">
                Watch Demo
                <PlayCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center text-indigo-300 mb-2">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span className="font-semibold">300+</span>
                </div>
                <p className="text-indigo-200 text-sm">Courses</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center text-indigo-300 mb-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-semibold">20k+</span>
                </div>
                <p className="text-indigo-200 text-sm">Students</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center text-indigo-300 mb-2">
                  <span className="font-semibold">4.9</span>
                </div>
                <p className="text-indigo-200 text-sm">Rating</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Dashboard Preview */}
          <div className={`relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-40"></div>
              <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
                <div className="h-10 bg-gray-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-gray-900 p-4">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-24 bg-gray-800 rounded-lg"></div>
                    <div className="h-24 bg-gray-800 rounded-lg"></div>
                    <div className="h-24 bg-gray-800 rounded-lg"></div>
                  </div>
                  <div className="h-8 bg-indigo-600 rounded-md w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6 mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-4/6"></div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-16 bg-gray-800 rounded-lg"></div>
                    <div className="h-16 bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-3 transform rotate-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <div className="h-3 w-16 bg-gray-300 rounded"></div>
                  <div className="h-2 w-12 bg-gray-200 rounded mt-1"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3 transform -rotate-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <div className="h-3 w-16 bg-gray-300 rounded"></div>
                  <div className="h-2 w-12 bg-gray-200 rounded mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C57.63,54.88,154.91,62.82,244.94,71.94,355.26,82.79,268.89,67.63,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;