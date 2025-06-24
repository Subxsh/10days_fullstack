import React from 'react'
import { Calendar, Users, Clock, Shield, Zap, Heart } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Event Creation',
      description: 'Create and manage events with our intuitive interface. Add all the details your attendees need to know.',
    },
    {
      icon: Users,
      title: 'Attendee Management',
      description: 'Keep track of attendees, set capacity limits, and manage registrations effortlessly.',
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'Never miss an event with our smart scheduling system and automated reminders.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is safe with us. We use industry-standard security practices to protect your information.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern technology for optimal performance and user experience.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Crafted by event enthusiasts who understand the importance of seamless event management.',
    },
  ]

  const stats = [
    { label: 'Events Created', value: '10,000+' },
    { label: 'Happy Users', value: '5,000+' },
    { label: 'Countries', value: '50+' },
    { label: 'Uptime', value: '99.9%' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          About <span className="text-primary-600">EventHub</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          EventHub is your comprehensive event management solution, designed to make organizing 
          and managing events as simple and efficient as possible. Whether you're planning a 
          small meetup or a large conference, we've got you covered.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <div className="card p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            We believe that great events bring people together and create lasting memories. 
            Our mission is to empower event organizers with the tools they need to create 
            exceptional experiences, while removing the complexity and stress from event management.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose EventHub?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the features that make EventHub the perfect choice for your event management needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16">
        <div className="card p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              EventHub by the Numbers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join thousands of satisfied users worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            EventHub is built using cutting-edge web technologies to ensure the best 
            performance, security, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend Technologies
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• React 18 with Hooks</li>
              <li>• React Router for navigation</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Responsive design principles</li>
              <li>• Dark mode support</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Features & Capabilities
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Local storage for data persistence</li>
              <li>• PDF generation and printing</li>
              <li>• Advanced search and filtering</li>
              <li>• Form validation</li>
              <li>• Toast notifications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="card p-8 lg:p-12 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/10 dark:to-blue-900/10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of event organizers who trust EventHub to manage their events. 
            Start creating your first event today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events/create"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Create Your First Event</span>
            </a>
            <a
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About