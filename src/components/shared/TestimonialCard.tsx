import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  event: string;
  rating: number;
  comment: string;
  image: string;
}

export default function TestimonialCard({ 
  name, 
  event, 
  rating, 
  comment, 
  image 
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{event}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 italic">{comment}</p>
    </div>
  );
}