import React from 'react';
import { Calendar, Star, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
            alt="Event background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Create Unforgettable Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transform your vision into extraordinary experiences with Infinix Events
          </p>
          <Link
            to="/events"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 duration-200"
          >
            Start Planning Today
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Infinix Events?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-12 h-12 text-purple-600" />,
                title: "Expert Planning",
                description: "Meticulous attention to every detail of your event"
              },
              {
                icon: <Star className="w-12 h-12 text-purple-600" />,
                title: "Premium Experience",
                description: "Luxury service tailored to your preferences"
              },
              {
                icon: <Users className="w-12 h-12 text-purple-600" />,
                title: "Dedicated Team",
                description: "Professional staff committed to your success"
              },
              {
                icon: <Trophy className="w-12 h-12 text-purple-600" />,
                title: "Award-Winning",
                description: "Recognized excellence in event planning"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Recent Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
                title: "Corporate Gala",
                description: "Annual tech industry celebration"
              },
              {
                image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
                title: "Wedding Reception",
                description: "Elegant beachside ceremony"
              },
              {
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
                title: "Product Launch",
                description: "Innovative tech showcase"
              }
            ].map((event, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-200">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Create Your Perfect Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life
          </p>
          <Link
            to="/events"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}