import React, { useState } from "react";
import {
  DollarSign,
  Shield,
  MapPin,
  Phone,
  CreditCard,
  Clock,
  Star,
  Users,
  Zap,
  Lock,
  Headphones,
  Bell,
  Smartphone,
  Car,
  Award,
  TrendingUp,
  Settings,
  Calendar,
} from "lucide-react";

const Seo = ({
  title,
  description,

}: {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords: string;
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

const Features = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const features = [
    {
      icon: Car,
      title: "Drive Your Way",
      description:
        "Use your own car with a professional driver—comfort, control, and convenience in one.",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: DollarSign,
      title: "Choose Driver",
      description:
        "Choose the right driver for your journey—compare budgets, check reviews and ratings, and explore detailed driver profiles before booking.",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Verified Drivers",
      description:
        "All drivers undergo thorough background checks, driving record verification, and skill assessments.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Real-time GPS Tracking",
      description:
        "Track your driver's location in real-time with live updates and accurate ETAs.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Phone,
      title: "SOS Emergency Button",
      description:
        "Instant emergency assistance with automatic location sharing to emergency contacts.",
      color: "from-red-400 to-red-600",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description:
        "Pay with UPI, wallets, credit/debit cards, or cash. Choose what's convenient for you.",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Book instantly or schedule rides in advance. Perfect for regular commutes or one-time trips.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Star,
      title: "Rating & Review System",
      description:
        "Rate your experience and read reviews from other customers to make informed choices.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Users,
      title: "Driver Profiles",
      description:
        "Detailed driver profiles with photos, ratings, experience, and customer feedback.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description:
        "Quick and easy booking process. Get a driver assigned within minutes of your request.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description:
        "End-to-end encryption for all communications and transactions. Your privacy is our priority.",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock support team ready to assist you with any queries or concerns.",
      color: "from-teal-400 to-teal-600",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Intelligent alerts for ride confirmations, driver arrivals, and important updates.",
      color: "from-violet-400 to-violet-600",
    },

    {
      icon: Smartphone,
      title: "Cross-Platform App",
      description:
        "Available on iOS, Android, and web platforms with seamless synchronization.",
      color: "from-rose-400 to-rose-600",
    },

    {
      icon: Award,
      title: "Loyalty Rewards",
      description:
        "Earn points, get discounts, and unlock exclusive benefits with our loyalty program.",
      color: "from-lime-400 to-lime-600",
    },

    {
      icon: TrendingUp,
      title: "Trip Analytics",
      description:
        "Detailed insights into your travel patterns, expenses, and carbon footprint.",
      color: "from-sky-400 to-sky-600",
    },
    {
      icon: DollarSign,
      title: "Set Your Rate",
      description:
        "Drivers set their own hourly charge, giving you flexibility and transparency.",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: Car,
      title: "Your Car, Your Control",
      description:
        "No more compromises—ride safely in your own vehicle with verified drivers.",
      color: "from-amber-400 to-amber-600",
    },
  ];

  const premiumFeatures = [
    {
      icon: Settings,
      title: "Priority Support",
      description:
        "24/7 customer support with priority assistance and dedicated account management for premium members.",
    },

    {
      icon: Users,
      title: "Corporate Solutions",
      description:
        "Bulk booking, centralized billing, expense management, and custom reporting for businesses.",
    },
    {
      icon: Award,
      title: "Premium Drivers",
      description:
        "Access to our top-rated drivers with additional training, certifications, and luxury vehicles.",
    },

    {
      icon: Calendar,
      title: "Advanced Scheduling",
      description:
        "Recurring rides, calendar integration, and automated booking for regular routes.",
    },
  ];

  const DownloadModal = () =>
    showDownloadModal ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm w-full mx-4">
          <p className="text-2xl font-bold text-emerald-700 mb-3">Thank You!</p>
          <p className="text-gray-700 mb-6">
            Thank you for your patience! Our app will be launching soon.
          </p>
          <button
            onClick={() => setShowDownloadModal(false)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    ) : null;

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(16, 185, 129, 0.2); }
        }
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes rotate-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .feature-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .feature-card:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15), 0 0 40px rgba(16, 185, 129, 0.1);
        }
        
        .feature-icon {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .feature-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s;
        }
        
        .feature-card:hover .feature-icon::before {
          transform: rotate(45deg) translateX(100%);
        }
        
        .floating-bg {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(223, 12, 12, 0.15), rgba(197, 24, 30, 0.08));
          animation: float 6s ease-in-out infinite;
          pointer-events: none;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #10b981, #059669, #047857);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #10b981, #059669);
          position: relative;
          overflow: hidden;
        }
        
        .gradient-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: rotate-gradient 4s linear infinite;
        }
        
        .stats-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        
        .stats-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .premium-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        
        .premium-card:hover::before {
          left: 100%;
        }
        
        .premium-card:hover {
          transform: scale(1.02) translateY(-5px);
        }
        
        .animate-in {
          animation: slide-in-up 0.6s ease forwards;
        }
        
        .hero-bg {
          background: radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(5, 150, 105, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
        }
      
      /* Mobile Optimizations */
      @media (max-width: 768px) {
        .feature-card:hover {
          transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(16, 185, 129, 0.05);
        }
        
        .floating-bg {
          display: none;
        }
        
        .stats-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
        
        .premium-card:hover {
          transform: scale(1.01) translateY(-3px);
        }
      }
      
      @media (max-width: 640px) {
        .gradient-bg::before {
          animation: none;
        }
        
        .feature-icon::before {
          display: none;
        }
      }
      `}</style>

      <Seo
        title="Otoddy Features | Safe, Reliable, and Easy Driver Booking"
        description="Explore Otoddy's powerful features — real-time driver tracking, verified profiles, cashless payments, and 24/7 availability."
        url="https://otoddy.com/features"
        image="/features-preview.jpg"
        keywords="driver app features, otoddy benefits, car driver services"
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-bg w-96 h-96 -top-32 -left-32 opacity-30"></div>
        <div className="floating-bg w-96 h-96 -bottom-32 -right-32 opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="py-24 hero-bg relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
              Powerful <span className="gradient-text">Features</span>
              <br />Built for You
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              Discover all the cutting-edge features that make Otoddy the most trusted platform for on-demand professional drivers.
            </p>

            {/* Download Button */}
            <button
              onClick={() => setShowDownloadModal(true)}
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              <Smartphone className="mr-3 w-6 h-6" />
              Download Soon
            </button>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 px-2">
              Everything You Need
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Our comprehensive feature set ensures a safe, convenient, and reliable experience for every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100 group`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`feature-icon bg-gradient-to-br ${feature.color} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 px-2">
              Premium <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Upgrade to premium for enhanced features, priority service, and exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {premiumFeatures.map((feature, index) => (
              <div
                key={index}
                className="premium-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mb-3 sm:mb-4 md:mb-6 opacity-90" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Backgrounds - optional */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-bg w-96 h-96 -top-32 -left-32 opacity-30"></div>
        <div className="floating-bg w-96 h-96 -bottom-32 -right-32 opacity-20"></div>
      </div>

      {/* Download Modal */}
      <DownloadModal />
    </div>
  );
};

export default Features;
