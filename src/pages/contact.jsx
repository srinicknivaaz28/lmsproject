import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Get in Touch</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Have questions or want to work with us? Reach out through any of the channels below or use our contact form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-8 border border-slate-100">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<Mail size={20} />}
                  title="Email"
                  value="info@company.com"
                  link="mailto:info@company.com"
                />
                
                <ContactItem 
                  icon={<Phone size={20} />}
                  title="Phone"
                  value="+1 (555) 123-4567"
                  link="tel:+15551234567"
                />
                
                <ContactItem 
                  icon={<MapPin size={20} />}
                  title="Address"
                  value="123 Business Avenue, Suite 200, San Francisco, CA 94107"
                  link="https://maps.google.com"
                  external
                />
                
                <ContactItem 
                  icon={<Clock size={20} />}
                  title="Business Hours"
                  value="Monday - Friday: 9AM - 5PM"
                />
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-medium text-slate-500 mb-4">CONNECT WITH US</h3>
                <div className="flex space-x-4">
                  <SocialIcon name="twitter" />
                  <SocialIcon name="linkedin" />
                  <SocialIcon name="facebook" />
                  <SocialIcon name="instagram" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg p-8 border border-slate-100">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="text-green-500 mb-4">
                    <CheckCircle size={64} />
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Thank you!</h3>
                  <p className="text-slate-500 text-center">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <Send size={16} className="mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="bg-slate-100 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Our Location</h2>
          <div className="bg-slate-300 h-96 rounded-lg overflow-hidden shadow-md">
            {/* Placeholder for map - in a real application, you would integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center bg-slate-200">
              <div className="text-slate-500 flex flex-col items-center">
                <MapPin size={48} />
                <p className="mt-4 font-medium">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for contact information items
const ContactItem = ({ icon, title, value, link, external = false }) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-md bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <p className="mt-1 text-sm text-slate-800">{value}</p>
      </div>
    </div>
  );
  
  if (link) {
    return (
      <a 
        href={link} 
        className="block hover:text-blue-600 transition-colors"
        target={external ? "_blank" : undefined} 
        rel={external ? "noopener noreferrer" : undefined}
      >
        <div className="flex justify-between items-start">
          {content}
          {external && <ExternalLink size={16} className="text-slate-400" />}
        </div>
      </a>
    );
  }
  
  return content;
};

// Social media icon component
const SocialIcon = ({ name }) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-colors"
    >
      {/* Simple placeholder for social icons */}
      <span className="text-xs font-bold uppercase">{name.charAt(0)}</span>
    </a>
  );
};

export default Contact;