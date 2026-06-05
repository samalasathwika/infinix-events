import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Chen",
      role: "Event Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Emily Williams",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Infinix Events</h1>
            <p className="text-xl opacity-90">
              Creating extraordinary experiences that leave lasting impressions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To transform ordinary moments into extraordinary memories through innovative event planning and flawless execution. We strive to exceed expectations and create unique experiences that reflect our clients' visions and aspirations.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Heart className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading event planning company known for creativity, reliability, and exceptional service. We aim to set new standards in the industry while maintaining personal connections with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of event planning experts brings creativity, dedication, and years of experience to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-purple-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Service",
                description: "Tailored solutions that match your unique vision and requirements"
              },
              {
                title: "Expert Team",
                description: "Seasoned professionals with extensive industry experience"
              },
              {
                title: "Attention to Detail",
                description: "Meticulous planning and flawless execution of every event"
              },
              {
                title: "Creative Excellence",
                description: "Innovative ideas that make your event stand out"
              },
              {
                title: "Full-Service Planning",
                description: "Comprehensive event management from concept to completion"
              },
              {
                title: "Client-First Approach",
                description: "Your satisfaction is our top priority"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}