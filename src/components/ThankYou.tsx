import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-pink-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-sky-700 hover:text-pink-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-sky-700 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your consultation request and will get back to you within 24 hours.
          </p>
          <p className="text-gray-600">
            If you need immediate assistance, please call us at{' '}
            <a href="tel:+18173236643" className="text-sky-700 font-semibold hover:text-pink-400 transition-colors">
              (817) 323-6643
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}