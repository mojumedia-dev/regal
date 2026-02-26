'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    community: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', community: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const communities = [
    { name: 'Parkside', location: 'Mapleton' },
    { name: 'Bella Vita', location: 'Mapleton' },
    { name: 'Bristol Farms', location: 'Ogden/West Weber' },
    { name: 'Amanti Lago', location: 'Heber City' },
    { name: 'Windflower', location: 'Heber City' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-regal-navy to-regal-gray-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Let's Build Your Dream Home
            </h1>
            <p className="text-xl text-gray-200">
              Reach out to our team and start your journey with Regal Homes
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-regal-navy mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Thank you! We'll be in touch soon.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="community" className="block text-sm font-medium text-gray-700 mb-2">
                      Community of Interest
                    </label>
                    <select
                      id="community"
                      name="community"
                      value={formData.community}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent"
                    >
                      <option value="">Select a community...</option>
                      {communities.map((comm) => (
                        <option key={comm.name} value={comm.name}>
                          {comm.name} - {comm.location}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-regal-gold focus:border-transparent"
                      placeholder="Tell us about your dream home..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-regal-navy mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-regal-gold mb-4">Corporate Office</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-regal-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <a href="tel:385-446-5524" className="text-regal-gold hover:text-regal-navy font-medium">
                          385-446-5524
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-regal-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <div>
                        <a href="https://www.regalut.com" target="_blank" rel="noopener noreferrer" className="text-regal-gold hover:text-regal-navy">
                          www.regalut.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-regal-gold mb-4">Sales Office Hours</h3>
                  <p className="text-gray-600">Monday - Saturday<br />11:00 AM - 5:00 PM</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-regal-gold mb-4">Our Communities</h3>
                  <div className="space-y-4">
                    {communities.map((comm) => (
                      <div key={comm.name} className="border-l-4 border-regal-gold pl-4">
                        <div className="font-medium text-regal-navy">{comm.name}</div>
                        <div className="text-sm text-gray-600">{comm.location}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-regal-navy text-white p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-regal-gold mb-3">Prefer to Call?</h3>
                  <p className="text-gray-200 mb-4">
                    Speak directly with a sales manager at your community of interest.
                  </p>
                  <a href="/communities" className="text-regal-gold hover:text-regal-gold-light underline">
                    View Community Contacts →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
