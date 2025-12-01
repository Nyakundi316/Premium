"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    projectSize: "",
    patternType: "",
    location: "",
    timeline: "",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    "Residential Driveway",
    "Commercial Parking",
    "Industrial Yard",
    "Walkway/Pathway",
    "Garden/Patio",
    "Car Park",
    "Other",
  ];

  const projectSizes = [
    "Small (under 50 sqm)",
    "Medium (50-200 sqm)",
    "Large (200-500 sqm)",
    "Extra Large (500+ sqm)",
  ];

  const patternTypes = [
    "Interlocking",
    "Hexagonal",
    "Cobblestone",
    "Herringbone",
    "Basket Weave",
    "Running Bond",
    "3D Blocks",
    "Not Sure - Need Advice",
  ];

  const timelineOptions = [
    "Immediately (within 1 week)",
    "Soon (within 2-4 weeks)",
    "Planning phase (1-2 months)",
    "Future project (3+ months)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    setSubmitted(true);
    
    // Auto-reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        projectSize: "",
        patternType: "",
        location: "",
        timeline: "",
        additionalNotes: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#0A1A2F] text-white">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your <span className="text-[#D4A017]">Free Quote</span>
          </h1>
          
          <p className="text-gray-300 mb-6">
            Fill in your details below and we'll contact you within 24 hours with a detailed quote.
          </p>
          
          {/* Quick Contact */}
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+254 7XX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@premiumpaving.co.ke</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Nairobi & Surrounding Areas</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0A1A2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Request Received!</h3>
                  <p className="text-gray-300 mb-6">
                    We'll call you within 24 hours to discuss your project and provide a detailed quote.
                  </p>
                  <p className="text-sm text-gray-400">
                    Form will reset in a few seconds...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Your Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                            placeholder="John Kamau"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                            placeholder="07XX XXX XXX"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Project Location *</label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                            placeholder="Area/Town, Nairobi"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Project Type *</label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                          >
                            <option value="">Select type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Approximate Size *</label>
                          <select
                            name="projectSize"
                            value={formData.projectSize}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                          >
                            <option value="">Select size</option>
                            {projectSizes.map((size) => (
                              <option key={size} value={size}>{size}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Preferred Pattern</label>
                          <select
                            name="patternType"
                            value={formData.patternType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                          >
                            <option value="">Select pattern</option>
                            {patternTypes.map((pattern) => (
                              <option key={pattern} value={pattern}>{pattern}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Timeline *</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((timeline) => (
                              <option key={timeline} value={timeline}>{timeline}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Additional Notes</label>
                      <textarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-[#D4A017] focus:outline-none"
                        placeholder="Any specific requirements or questions?"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
                      >
                        Submit Quote Request
                      </button>
                      <p className="text-gray-500 text-xs text-center mt-3">
                        We respect your privacy. Your information will only be used to contact you about this quote.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Why Quote With Us */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Why Quote With Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4A017] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-[#0A1A2F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Free site assessment included</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4A017] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-[#0A1A2F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">24-hour response time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4A017] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-[#0A1A2F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Competitive pricing guaranteed</span>
                </li>
                
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Prefer to Call?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call for immediate quote</p>
                    <a 
                      href="tel:+2547XXXXXXXXX" 
                      className="text-lg font-bold text-white hover:text-[#D4A017] transition-colors"
                    >
                      +254 7XX XXX XXX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Service Areas</p>
                    <p className="font-medium text-white">Nairobi & surrounding counties</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Business Hours</p>
                    <p className="font-medium text-white">Mon-Sat: 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-xs text-[#D4A017] font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">We call you within 24 hours</p>
                    <p className="text-gray-400 text-xs">To discuss your project details</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-xs text-[#D4A017] font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Free site assessment</p>
                    <p className="text-gray-400 text-xs">We visit your location (Nairobi area)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-xs text-[#D4A017] font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Detailed quote within 24h</p>
                    <p className="text-gray-400 text-xs">Transparent pricing, no hidden costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="text-center p-4 rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A017]">24h</div>
            <div className="text-sm text-gray-400">Response Time</div>
          </div>
          <div className="text-center p-4 rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A017]">Free</div>
            <div className="text-sm text-gray-400">Site Assessment</div>
          </div>
          
          <div className="text-center p-4 rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A017]">200+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
        </div>
      </main>
    </div>
  );
}