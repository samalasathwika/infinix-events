import React from 'react';

interface GalleryImageProps {
  url: string;
  title: string;
}

export default function GalleryImage({ url, title }: GalleryImageProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
      <img
        src={url}
        alt={title}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-6 font-semibold text-lg">
          {title}
        </p>
      </div>
    </div>
  );
}