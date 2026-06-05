import React from 'react';
import { Star, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const eventCategories = [
  {
    id: 'birthdays',
    title: 'Birthday Events',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84',
    events: [
      {
        id: 'kids-birthday',
        title: 'Kids Birthday Bash',
        price: '₹25,000',
        rating: 4.8,
        description: 'Complete party setup with games, decorations, and entertainment',
        image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368'
      },
      {
        id: 'adult-birthday',
        title: 'Adult Birthday Celebration',
        price: '₹35,000',
        rating: 4.9,
        description: 'Sophisticated celebration with premium catering and decor',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d'
      },
      {
        id: 'themed-birthday',
        title: 'Themed Birthday Party',
        price: '₹45,000',
        rating: 4.7,
        description: 'Custom themed decorations and entertainment',
        image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84'
      }
    ]
  },
  {
    id: 'weddings',
    title: 'Wedding Events',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    events: [
      {
        id: 'traditional-wedding',
        title: 'Traditional Wedding',
        price: '₹5,00,000',
        rating: 4.9,
        description: 'Complete wedding planning with traditional elements',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
      },
      {
        id: 'destination-wedding',
        title: 'Destination Wedding',
        price: '₹10,00,000',
        rating: 4.8,
        description: 'Exotic location wedding planning and management',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a'
      }
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
    events: [
      {
        id: 'conference',
        title: 'Business Conference',
        price: '₹2,00,000',
        rating: 4.7,
        description: 'Professional conference setup with tech support',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678'
      },
      {
        id: 'product-launch',
        title: 'Product Launch Event',
        price: '₹3,50,000',
        rating: 4.8,
        description: 'Innovative product launch setup with media coverage',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2'
      }
    ]
  },
  {
    id: 'awards',
    title: 'Award Ceremonies',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6',
    events: [
      {
        id: 'corporate-awards',
        title: 'Corporate Awards Night',
        price: '₹4,50,000',
        rating: 4.9,
        description: 'Elegant awards ceremony with red carpet experience',
        image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6'
      },
      {
        id: 'industry-awards',
        title: 'Industry Excellence Awards',
        price: '₹6,00,000',
        rating: 4.8,
        description: 'Prestigious industry awards with live entertainment',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87'
      }
    ]
  },
  {
    id: 'virtual',
    title: 'Virtual Events',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899',
    events: [
      {
        id: 'virtual-conference',
        title: 'Virtual Conference',
        price: '₹1,50,000',
        rating: 4.7,
        description: 'Professional virtual conference platform with networking',
        image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899'
      },
      {
        id: 'hybrid-event',
        title: 'Hybrid Event Experience',
        price: '₹2,50,000',
        rating: 4.8,
        description: 'Combined physical and virtual event setup',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7'
      }
    ]
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding Ceremony",
    rating: 5,
    comment: "Infinix Events made our dream wedding a reality. Every detail was perfect!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Rajesh Kumar",
    event: "Corporate Conference",
    rating: 5,
    comment: "Professional team, flawless execution. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Anita Desai",
    event: "Birthday Party",
    rating: 5,
    comment: "The birthday party was magical! Kids loved every moment.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
            Our Event Services
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {eventCategories.map((category) => (
              <div key={category.id} className="space-y-8">
                <h2 className="text-3xl font-bold">{category.title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {category.events.map((event) => (
                    <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="ml-1 text-gray-600">{event.rating}</span>
                          </div>
                          <span className="text-purple-600 font-semibold">{event.price}</span>
                        </div>
                        <Link
                          to={`/book/${category.id}/${event.id}`}
                          className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.event}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}