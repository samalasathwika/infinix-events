import React from 'react';
import { CheckCircle } from 'lucide-react';

interface BookingConfirmationProps {
  onClose: () => void;
}

export default function BookingConfirmation({ onClose }: BookingConfirmationProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full animate-fade-in text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Your booking request has been received. You'll receive an email shortly with all the details.
        </p>
        <button
          onClick={onClose}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}