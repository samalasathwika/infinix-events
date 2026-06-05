import React from 'react';
import EventCard from './EventCard';

interface Event {
  id: string;
  title: string;
  price: string;
  rating: number;
  description: string;
  image: string;
}

interface EventCategoryProps {
  id: string;
  title: string;
  events: Event[];
}

export default function EventCategory({ id, title, events }: EventCategoryProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard
            key={event.id}
            categoryId={id}
            {...event}
          />
        ))}
      </div>
    </div>
  );
}