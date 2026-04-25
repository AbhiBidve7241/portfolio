/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitBranch, Link, Send, CheckCircle } from 'lucide-react';
import { content } from '../data/content';
import { Card, CardHeader, CardTitle, CardContent, Button } from '../UI';
import ShinyText from '../ShinyText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:${content.personal.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full space-y-8">
      <div>
        <h2  className="text-3xl font-semibold mb-2">

        <ShinyText text=" Get In Touch" />
      </h2>
        
        <p className="text-muted">Let's discuss your next project or opportunity</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* Email */}
          <Card hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-text text-sm mb-1">Email</h3>
                <a
                  href={`mailto:${content.personal.email}`}
                  className="text-accent-primary hover:text-accent-primary/80 transition-colors text-sm break-all"
                >
                  {content.personal.email}
                </a>
              </div>
            </div>
          </Card>

          {/* Phone */}
          <Card hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-text text-sm mb-1">Phone</h3>
                <a
                  href={`tel:${content.personal.phone}`}
                  className="text-accent-primary hover:text-accent-primary/80 transition-colors text-sm"
                >
                  {content.personal.phone}
                </a>
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-text text-sm mb-1">Location</h3>
                <p className="text-muted text-sm">{content.personal.location}</p>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Connect with me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  size="md"
                  className="flex-1"
                  onClick={() => window.open(content.personal.linkedin)}
                >
                  <Link size={16} />
                  <span>LinkedIn</span>
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="flex-1"
                  onClick={() => window.open(content.personal.github)}
                >
                  <GitBranch size={16} />
                  <span>GitHub</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle size={32} className="text-green-500 mb-3" />
                  <p className="text-text font-medium mb-1">Message sent!</p>
                  <p className="text-muted text-sm">
                    I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="md" className="w-full">
                    <Send size={16} />
                    <span>Send Message</span>
                  </Button>
                </form>
              )}

              <p className="text-xs text-muted mt-4 text-center">
                Or email directly at{' '}
                <a
                  href={`mailto:${content.personal.email}`}
                  className="text-accent-primary hover:text-accent-primary/80"
                >
                  {content.personal.email}
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>

      {/* Quick Response Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="text-center">
          <div className="flex justify-center mb-3">
            <Send className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-text mb-1">Quick Response Guaranteed</h3>
          <p className="text-muted text-sm">
            I typically respond within 24 hours to all inquiries
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default Contact;

