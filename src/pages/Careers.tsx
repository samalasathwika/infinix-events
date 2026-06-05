import React, { useState } from 'react';
import { Briefcase, GraduationCap, Clock, MapPin } from 'lucide-react';
import CareerForm from '../components/CareerForm';

const positions = [
  {
    title: 'Event Manager',
    type: 'Full-time',
    location: 'Mumbai, India',
    experience: '3-5 years',
    description: 'Lead and manage end-to-end event planning and execution.'
  },
  {
    title: 'Creative Designer',
    type: 'Full-time',
    location: 'Delhi, India',
    experience: '2-4 years',
    description: 'Design and create stunning event themes and decorations.'
  },
  {
    title: 'Event Coordinator',
    type: 'Full-time',
    location: 'Bangalore, India',
    experience: '1-3 years',
    description: 'Coordinate with clients and vendors to ensure smooth event execution.'
  }
];

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Join Our Team</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Be part of creating extraordinary experiences and memories
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition-transform">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
                    <p className="text-gray-600">Opportunities to work on diverse projects and develop your skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition-transform">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Learning & Development</h3>
                    <p className="text-gray-600">Regular training sessions and skill development programs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <h3 className="text-xl font-semibold mb-4">{position.title}</h3>
                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <button
                      onClick={() => setSelectedPosition(position.title)}
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedPosition && (
        <CareerForm
          position={selectedPosition}
          onClose={() => setSelectedPosition(null)}
        />
      )}
    </div>
  );
}