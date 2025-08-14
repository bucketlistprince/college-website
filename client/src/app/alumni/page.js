"use client";
import React from 'react';
import { FaGraduationCap, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function AlumniPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
          <FaGraduationCap className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
          Alumni Network
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Stay connected with your alma mater and fellow graduates. Join our growing network of successful alumni.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '10,000+', label: 'Alumni Worldwide' },
              { number: '50+', label: 'Countries' },
              { number: '30+', label: 'Alumni Chapters' },
              { number: '85%', label: 'Active Members' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-blue-600">{stat.number}</p>
                <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Alumni Success Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Class of 2015',
              company: 'Senior Software Engineer at TechCorp',
              image: '/images/alumni/sarah.jpg',
              quote: 'The education and network I gained at AOT opened doors I never thought possible.'
            },
            {
              name: 'Michael Chen',
              role: 'Class of 2018',
              company: 'Product Manager at InnovateX',
              image: '/images/alumni/michael.jpg',
              quote: 'The alumni network helped me land my dream job right after graduation.'
            },
            {
              name: 'Priya Patel',
              role: 'Class of 2017',
              company: 'Research Scientist at BioTech Labs',
              image: '/images/alumni/priya.jpg',
              quote: 'The connections I made during my time at AOT continue to be invaluable in my career.'
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-extrabold mb-4">Join Our Alumni Network</h2>
              <p className="text-xl text-blue-100 mb-6">
                Stay connected with your classmates, access exclusive resources, and help shape the future of AOT.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-200">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Update Your Information</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700">Graduation Year</label>
                  <select
                    id="graduation-year"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Year</option>
                    {Array.from({length: 30}, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Update</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Share your latest achievements, career updates, or how you'd like to get involved..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Update Information
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Upcoming Alumni Events</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Annual Alumni Meet',
              date: 'October 15, 2023',
              location: 'Campus Auditorium',
              description: 'Join us for our annual alumni meet and reconnect with your batchmates and professors.'
            },
            {
              title: 'Industry Leaders Panel',
              date: 'November 5, 2023',
              location: 'Virtual',
              description: 'Hear from successful alumni about industry trends and career opportunities.'
            },
            {
              title: 'Campus Recruitment Drive',
              date: 'December 1, 2023',
              location: 'Placement Cell',
              description: 'Alumni are invited to participate in our campus recruitment drive.'
            }
          ].map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-blue-600 font-medium mb-2">{event.date}</p>
              <p className="text-gray-600 mb-3">{event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
