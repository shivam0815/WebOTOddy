import React from 'react';
import { Smartphone, Fingerprint, CreditCard, MapPin,Users, Shield, Zap, Globe } from 'lucide-react';
import Seo from "../components/Seo";
const AppFeatures = () => {
 const mobileFeatures = [
  {
    icon: Smartphone,
    title: "iOS & Android Support",
    description: "Native apps for both iOS and Android with optimized performance and user experience."
  },
  {
    icon: Fingerprint,
    title: "Face ID / Biometric Login",
    description: "Secure and quick access with fingerprint, Face ID, or pattern-based authentication."
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description: "UPI, digital wallets, credit/debit cards, and cash - choose what works best for you."
  },
  {
    icon: MapPin,
    title: "Live Ride Tracking",
    description: "Track your driver in real-time with accurate GPS updates for peace of mind."
  },
  {
    icon: Users,
    title: "Driver Profiles & Ratings",
    description: "View detailed driver profiles, ratings, and reviews before booking your ride."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "End-to-end encryption, secure payments, and privacy protection for all your data."
  }
];


  const appScreenshots = [
    {
      title: "Home Screen",
      image: "/home.jpeg",
      description: "Clean, intuitive interface for easy booking"
    },
    {
      title: "Driver Selection",
      image: "/ren3.png",
      description: "Choose from verified driver profiles"
    },
    {
      title: "Live Tracking",
      image: "/ren4.png",
      description: "Real-time GPS tracking and updates"
    }
  ];

  const integrations = [
    {
      icon: Globe,
      title: "Maps Integration",
      description: "Google Maps and Apple Maps for accurate navigation and routing"
    },
    {
      icon: Zap,
      title: "Calendar Sync",
      description: "Automatic ride scheduling based on your calendar appointments"
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "Direct integration with local emergency services and contacts"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Seo
  title="Otoddy App Features | Smarter Way to Book Drivers"
  description="Download the Otoddy app and experience smart driver booking with safety alerts, quick payments, and seamless ride management."
  url="https://otoddy.com/app-features"
  image="/app-features-preview.jpg"
  keywords="otoddy app, app features, driver app"
/>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Mobile <span className="gradient-text">App Features</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Experience the full power of Otoddy with our feature-rich mobile applications designed for modern users.
          </p>
        </div>
      </section>

      {/* App Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Mobile Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mobile apps are built with cutting-edge technology to provide seamless, secure, and intelligent transportation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100">
                <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              App <span className="gradient-text">Interface</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean, modern design that makes booking a ride effortless and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appScreenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Phone notch */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{screenshot.title}</h3>
                <p className="text-gray-600">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Seamless <span className="gradient-text">Payments</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Multiple payment options integrated into one simple, secure platform. Choose what works best for you.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
                  <CreditCard className="h-8 w-8 mx-auto mb-3" />
                  <div className="font-semibold">Cards</div>
                  <div className="text-blue-100 text-sm">Credit & Debit</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-3" />
                  <div className="font-semibold">UPI</div>
                  <div className="text-green-100 text-sm">Instant Payments</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                  <Globe className="h-8 w-8 mx-auto mb-3" />
                  <div className="font-semibold">Wallets</div>
                  <div className="text-purple-100 text-sm">Paytm, PhonePe</div>
                </div>
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl p-6 text-white text-center">
                  <span className="text-2xl mb-3 block">💵</span>
                  <div className="font-semibold">Cash</div>
                  <div className="text-gray-100 text-sm">Traditional</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/payment.png"
                alt="Payment interface"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Smart <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrated with your favorite apps and services for a connected experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
                <div className="gradient-bg w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <integration.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{integration.title}</h3>
                <p className="text-gray-600 leading-relaxed">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Download the App Soon
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Available Soon for free on iOS and Android. Experience the future of transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-xs">Download Soon</div>
                <div className="font-bold">App Store</div>
              </div>
            </div>
            <div className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <div className="text-xs">Get it on Soon</div>
                <div className="font-bold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppFeatures;