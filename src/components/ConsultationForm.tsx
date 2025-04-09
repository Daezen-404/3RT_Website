import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const services = [
  'Tax Preparation Services',
  'Business Services',
  'Legal Form Services',
  'Consultation & Credit Strategy'
];

export default function ConsultationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    companyName: '',
    problems: '',
    additionalInfo: ''
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch('https://hook.us2.make.com/a717ta14tozt0nxwab9bl28ktux6ig97', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    navigate('/thank-you');
  } catch (error) {
    console.error("Error sending form data:", error);
    alert("There was a problem submitting the form. Please try again.");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-sky-700 mb-2">Schedule Your Free Consultation</h1>
          <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="">Select a service...</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div>
              <label htmlFor="problems" className="block text-sm font-medium text-gray-700 mb-1">What problems are you looking to solve? *</label>
              <textarea
                id="problems"
                name="problems"
                required
                value={formData.problems}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information (Optional)</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Request My Free Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}