import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { FileText, Building2, ScrollText, TrendingUp, ChevronRight, Facebook, Instagram } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ConsultationForm from './components/ConsultationForm';
import ThankYou from './components/ThankYou';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://imgur.com/6iAqPrX.png" 
              alt="Three Ribbon Taxes Logo" 
              className="h-12 w-auto"
            />
            <span className="ml-3 text-xl font-semibold text-sky-700">Three Ribbon Taxes</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-sky-700 hover:text-pink-400 transition-colors">Home</a>
            <a href="#services" className="text-sky-700 hover:text-pink-400 transition-colors">Services</a>
            <a href="#about" className="text-sky-700 hover:text-pink-400 transition-colors">About</a>
            <a href="#contact" className="text-sky-700 hover:text-pink-400 transition-colors">Book Now</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-sky-100 via-white to-pink-100">
        <div className="container mx-auto text-center max-w-4xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-6">
            Fast, Reliable Tax Services You Can Trust.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Serving individuals, families, and small businesses with care and accuracy.
          </p>
          <button 
            onClick={() => navigate('/consultation')}
            className="bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-700 transition-colors flex items-center mx-auto shadow-lg hover:shadow-xl"
          >
            Schedule Your Free Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-sky-700" data-aos="fade-up">Meet Three Ribbon Taxes</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <img 
                src="https://imgur.com/3vEF1K0.jpeg"
                alt="Three Ribbon Taxes Logo"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <p className="text-lg text-gray-600 leading-relaxed">
                Tanesa Frazier is the founder of Three Ribbon Taxes, a dedicated tax professional with years of experience helping clients maximize refunds, avoid mistakes, and gain financial clarity. Her commitment to excellence and personalized service has made her a trusted name in tax preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-sky-700" data-aos="fade-up">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <FileText className="h-12 w-12 text-sky-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-sky-700">Tax Preparation Services</h3>
              <p className="text-gray-600">Simple, secure filing for individuals and families with maximum refund accuracy. Includes quarterly tax estimates, tax resolutions for clients who owe back taxes, and tailored solutions for entrepreneurs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <Building2 className="h-12 w-12 text-pink-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-sky-700">Business Services</h3>
              <p className="text-gray-600">Offering Texas-based business formation support, registered agent guidance, and personalized advice for entrepreneurs launching or scaling a company.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <ScrollText className="h-12 w-12 text-sky-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-sky-700">Legal Form Services</h3>
              <p className="text-gray-600">Affordable, accurate support for uncontested divorce paperwork, business formations, settlement offers for individuals managing creditor debt, and official notary services in Texas.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="400">
              <TrendingUp className="h-12 w-12 text-pink-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-sky-700">Consultation & Credit Strategy</h3>
              <p className="text-gray-600">Expert tax consultations and proven strategies for DIY credit repair, including guided tools and templates. Plus comprehensive bookkeeping services tailored to small business owners and independent contractors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-sky-700" data-aos="fade-up">What Clients Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl shadow-lg" data-aos="fade-right">
              <p className="text-gray-600 italic mb-4">"Tanesa has done my taxes for years! She's super quick, efficient and always answers any questions I may have. I'll continue to use her services and refer her."</p>
              <footer className="font-semibold text-sky-700">- Kylah Artz</footer>
            </blockquote>
            <blockquote className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl shadow-lg" data-aos="fade-left">
              <p className="text-gray-600 italic mb-4">"Tanesa delivers top-tier professionalism every year. No one beats her expertise. If you have a question, she's got the answer."</p>
              <footer className="font-semibold text-sky-700">- Josef Garza</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-sky-600 to-sky-700 text-white">
        <div className="container mx-auto max-w-4xl text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to File With Confidence?</h2>
          <button 
            onClick={() => navigate('/consultation')}
            className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors mb-6 shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation Now
          </button>
          <p className="text-xl">
            Or call us directly at{' '}
            <a href="tel:+18173236643" className="font-semibold hover:underline">
              (817) 323-6643
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Three Ribbon Taxes</h3>
              <p className="text-gray-400">Professional tax services you can trust.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex justify-center space-x-8">
                <a href="https://www.facebook.com/tanesaf" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/taxingtanesa/" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Three Ribbon Taxes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;