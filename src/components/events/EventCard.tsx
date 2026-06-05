import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  categoryId: string;
  title: string;
  price: string;
  rating: number;
  description: string;
  image: string;
}

export default function EventCard({ 
  id, 
  categoryId, 
  title, 
  price, 
  rating, 
  description, 
  image 
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{rating}</span>
          </div>
          <span className="text-purple-600 font-semibold">{price}</span>
        </div>
        <Link
          to={`/book/${categoryId}/${id}`}
          className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}