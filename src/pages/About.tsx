import React, { useState, useEffect, FormEvent, memo, useCallback } from "react";
import { Heart, Target, Shield, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { db } from "../firebaseConfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

type Value = {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
};
type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin?: string;
  github?: string;
};
type JourneyStep = {
  year: string;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: Heart,
    title: "Empathy",
    description:
      "We understand the daily struggles of commuting and strive to make every journey comfortable and stress-free.",
  },
  {
    icon: Shield,
    title: "Safety",
    description:
      "Safety is never compromised. Every driver, every ride, every detail is designed with your security in mind.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "No hidden fees, no surprise charges. Complete transparency in pricing, policies, and operations.",
  },
];

const team: TeamMember[] = [
  {
    name: "Shashank Pandey",
    role: "Co-Founder & CEO",
    image: "/ss.JPG",
    description: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/pandey-shashank-shekhar",
    github: "https://github.com/shashankfzb",
  },
  {
    name: "Mohit Makhijani",
    role: "Co-Founder & CTO",
    image: "/mt.jpeg",
    description: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/mohit-makhijani-621abb296",
    github: "https://github.com/MohitMakhijani",
  },
  {
    name: "Shivam Shukla",
    role: "Co-Founder & COO",
    image: "/SHIVA.JPG",
    description: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/shivam-shukla-432068226/",
    github: "https://github.com/shivam0815",
  },
];

const journey: JourneyStep[] = [
  {
    year: "2025",
    title: "The Spark",
    description:
      "The idea of Otoddy was born from the struggles of long daily commutes, inspiring us to create a smarter, more reliable way to book trusted drivers on demand.",
  },
  {
    year: "2025",
    title: "Prototype",
    description:
      "Otoddy was born out of the challenges of long daily commutes, driving us to build a smarter and more reliable way to book trusted drivers on demand. We first tested the idea with friends and family, and their positive response confirmed the real need for such a service.",
  },
  {
    year: "2026",
    title: "Trust & Safety",
    description:
      "Rolled out driver verification and advanced safety features across cities, ensuring trust, transparency, and peace of mind for every ride.",
  },
  {
    year: "2027",
    title: "Scaling Up",
    description:
      "Expanded operations to multiple cities, serving thousands of users and establishing Otoddy as a trusted platform for daily commutes and on-demand drivers.",
  },
  {
    year: "2027",
    title: "Recognition",
    description:
      "Recognized by Startup India and industry leaders for innovation in mobility and driver-on-demand services, reinforcing Otoddy’s vision for safer and smarter commutes.",
  },
  {
    year: "Future",
    title: "Driving Tomorrow",
    description:
      "Continuing to innovate and bring safe, stress-free rides to millions, while shaping the future of urban mobility with trusted drivers on demand.",
  },
];

// Memoized DownloadModal (outside main component)
const DownloadModal = memo(
  ({
    visible,
    onClose,
  }: {
    visible: boolean;
    onClose: () => void;
  }) => {
    if (!visible) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm w-full mx-4">
          <p className="text-2xl font-bold text-emerald-700 mb-3">Thank You!</p>
          <p className="text-gray-700 mb-6">
            Thank you for your patience! The app will be launching soon.
          </p>
          <button
            onClick={onClose}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
);

// Memoized WishlistModal (outside main component)
const WishlistModal = memo(
  ({
    visible,
    onClose,
    email,
    onEmailChange,
    onSubmit,
    error,
    success,
    count,
  }: {
    visible: boolean;
    onClose: () => void;
    email: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    error: string;
    success: boolean;
    count: number;
  }) => {
    if (!visible) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm w-full">
          <h3 className="text-xl font-bold text-emerald-600 mb-4">Join the Wishlist</h3>
          {success ? (
            <>
              <p className="text-green-600 mb-6">Thank you! You've been added.</p>
              <button
                onClick={onClose}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none"
              >
                Close
              </button>
            </>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Enter your email"
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                autoComplete="email"
                autoFocus
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none"
              >
                Join
              </button>
              {error && <p className="text-sm text-red-600">{error}</p>}
            </form>
          )}
          <div className="mt-4 text-sm text-gray-500">Wishlist joined: {count}</div>
        </div>
      </div>
    );
  }
);

const About: React.FC = () => {
  // Modal and form state
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [email, setEmail] = useState("");
  const [wishlistError, setWishlistError] = useState("");
  const [wishlistSuccess, setWishlistSuccess] = useState(false);
  const [count, setCount] = useState(0);

  // Listen to wishlist count from Firestore live
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "wishlist"), (snapshot) => {
      setCount(snapshot.size);
    });
    return () => unsubscribe();
  }, []);

  // Submit email to Firestore wishlist collection
  const handleWishlistSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setWishlistError("");
      setWishlistSuccess(false);

      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setWishlistError("Please enter a valid email.");
        return;
      }

      try {
        await addDoc(collection(db, "wishlist"), {
          email: email.trim(),
          timestamp: new Date(),
        });
        setWishlistSuccess(true);
        setEmail("");
      } catch (error) {
        console.error("Firestore addDoc error:", error);
        setWishlistError("Server error, please try again.");
      }
    },
    [email]
  );

  // Input change handler
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  // Close modal handlers with resetting states for Wishlist modal only on close
  const closeWishlistModal = () => {
    setShowWishlistModal(false);
    setWishlistSuccess(false);
    setWishlistError("");
    setEmail("");
  };

  const closeDownloadModal = () => {
    setShowDownloadModal(false);
  };

  return (
    <div className="min-h-screen pt-20">
      <Seo
        title="About Otoddy | Our Mission & Vision"
        description="Otoddy was built to make commuting safe and hassle-free. Learn about our mission, vision, and commitment to trust and reliability."
        url="https://otoddy.com/about"
        image="/about-preview.jpg"
        keywords="about otoddy, otoddy mission, driver service"
      />

      <DownloadModal visible={showDownloadModal} onClose={closeDownloadModal} />
      <WishlistModal
        visible={showWishlistModal}
        onClose={closeWishlistModal}
        email={email}
        onEmailChange={handleEmailChange}
        onSubmit={handleWishlistSubmit}
        error={wishlistError}
        success={wishlistSuccess}
        count={count}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Born from the frustration of long, exhausting commutes, Otoddy is here to
            transform how you think about transportation.
          </p>
        </div>
      </section>

      {/* Founders' Story Section */}
      <section className="py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emerald-600 mb-4">
                The Moment of Truth
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                It was well past midnight, and sleep wouldn’t come. My mind kept chasing one idea after another, none of them feeling quite right. Then, in the stillness,
                a single question rose to the surface: why isn’t there an easy way to hire a driver whenever you need one — just for as long as you need them
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                In that quiet moment, I realized how many people might need a driver for just a few hours — whether for safety, convenience, or simply peace of mind. But there
                wasn’t a simple, affordable, and flexible way to make it happen.
                I envisioned a platform where users could hire trusted drivers for their own cars, pay only for the hours they need, and have full control over pricing. That vision became the foundation for Otoddy.
              </p>
              <cite className="block text-primary font-semibold">— Shivam, Co-Founder</cite>
            </div>
            <div className="relative">
              <div className="glass-card p-4 rounded-xl">
                <img
                  src="/SHIVA.JPG"
                  alt="Shivam"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 hidden md:block glass-card p-4 floating-card text-center">
                <div className="text-xl font-bold text-teal-500">2 AM</div>
                <div className="text-sm text-gray-500">Crisis Hour</div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block glass-card p-4 floating-card text-center">
                <div className="text-xl font-bold text-emerald-600">14</div>
                <div className="text-sm text-gray-500">Hour Workday</div>
              </div>
              <div className="mt-4 flex gap-4 justify-center md:hidden">
                <div className="glass-card p-4 flex-1 text-center floating-card">
                  <div className="text-xl font-bold text-teal-500">2 AM</div>
                  <div className="text-sm text-gray-500">Crisis Hour</div>
                </div>
                <div className="glass-card p-4 flex-1 text-center floating-card">
                  <div className="text-xl font-bold text-emerald-600">14</div>
                  <div className="text-sm text-gray-500">Hour Workday</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Building for Trust</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                After personally hearing stories from friends about unreliable drivers, I knew the only way forward was to set new standards for safety, verification, and transparency.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                I spent months meeting drivers and customers, designing checks and processes that would help people trust Otoddy as much as they’d trust a close friend behind the wheel.
                Our goal: making sure every user feels safe, heard, and fully empowered at all times.
              </p>
              <cite className="block text-primary font-semibold">— Shashank, Co-Founder</cite>
            </div>
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-4 rounded-xl">
                <img
                  src="/ss.JPG"
                  alt="Shashank"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 hidden md:block glass-card p-4 floating-card text-center">
                <div className="text-xl font-bold text-teal-500">100+</div>
                <div className="text-sm text-gray-500">Hours Testing</div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block glass-card p-4 floating-card text-center">
                <div className="text-xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-gray-500">Support Vision</div>
              </div>
              <div className="mt-4 flex gap-4 justify-center md:hidden">
                <div className="glass-card p-4 flex-1 text-center floating-card">
                  <div className="text-xl font-bold text-teal-500">100+</div>
                  <div className="text-sm text-gray-500">Testing</div>
                </div>
                <div className="glass-card p-4 flex-1 text-center floating-card">
                  <div className="text-xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emerald-600 mb-4">Scaling the Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                To truly make a difference, we needed more than an idea—we needed a platform that could grow with our customers, becoming smarter and safer with every ride.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Bringing Otoddy to life meant fusing tech, design, and feedback. Every line of code and design pixel was chosen to deliver trust and delight, at scale.
                Today, our mission expands with every ride and every resolved journey. Otoddy’s story is just beginning.
              </p>
              <cite className="block text-primary font-semibold">— Mohit, Co-Founder</cite>
            </div>
            <div className="relative">
              <div className="glass-card p-4 rounded-xl">
                <img
                  src="/mt.jpeg"
                  alt="Mohit"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 hidden md:block glass-card p-4 floating-card text-center">
                <div className="text-xl font-bold text-teal-500">∞</div>
                <div className="text-sm text-gray-500">Miles to Go</div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block glass-card p-4 floating-card text-center">
                <div className="text-xl font-bold text-emerald-600">#1</div>
                <div className="text-sm text-gray-500">User Commitment</div>
              </div>
              <div className="mt-4 flex gap-4 justify-center md:hidden">
                <div className="glass-card p-4 flex-1 text-center floating-card">
                  <div className="text-xl font-bold text-teal-500">∞</div>
                  <div className="text-sm text-gray-500">Miles</div>
                </div>
                <div className="glass-card p-4 flex-1 text-center floating-card">
                  <div className="text-xl font-bold text-emerald-600">#1</div>
                  <div className="text-sm text-gray-500">Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Urban Mobility Gap Section */}
      <section
        className="parallax-bg py-20 relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26, 35, 126, 0.8), rgba(26, 35, 126, 0.8)), url('/crisis.png')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mr-4" />
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">
                The Urban Mobility Gap
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center story-chapter">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-4">The Problem</h3>
              <p className="text-white/90">
                Millions of urban professionals face the same dilemma: owning a car but being too exhausted to drive safely after long workdays.
              </p>
            </div>
            <div className="glass-card p-8 text-center story-chapter">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-4 bg ">The Insight</h3>
              <p className="text-white/90">
                Existing solutions forced you to abandon your car or pay unpredictable surge pricing. There had to be a better way.
              </p>
            </div>
            <div className="glass-card p-8 text-center story-chapter">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-4">The Vision</h3>
              <p className="text-white/90">
                What if you could keep your car, set your own fare, and choose a trusted driver? That’s intelligent convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">03</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary">Our Mission & Values</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering urban professionals with intelligent convenience through empathy-driven innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="glass-card p-8 lg:p-12">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-6">Intelligent Convenience</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We believe convenience shouldn’t come at the cost of control. Our platform gives you the power to set your own fare, choose your driver, and maintain ownership of your transportation decisions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This isn’t just about getting from point A to point B. It’s about understanding that life is complex, and sometimes the smartest choice is asking for help.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Urban professional using Otoddy"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop";
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-dark-blue" />
              </div>
              <h4 className="font-poppins font-semibold text-primary mb-2">Empathy First</h4>
              <p className="text-gray-600 text-sm">Understanding life’s complexities and providing solutions that truly help.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-dark-blue" />
              </div>
              <h4 className="font-poppins font-semibold text-primary mb-2">Safety Always</h4>
              <p className="text-gray-600 text-sm">Comprehensive verification and protection for every journey.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-dark-blue" />
              </div>
              <h4 className="font-poppins font-semibold text-primary mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Constantly evolving to meet the changing needs of urban life.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-dark-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-poppins font-semibold text-primary mb-2">Community</h4>
              <p className="text-gray-600 text-sm">Building connections between drivers and riders based on trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" />
            <div className="space-y-12">
              {journey.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  <div
                    className={`w-full sm:w-1/2 glass-card p-6 rounded-xl text-center sm:text-left`}
                  >
                    <div className="text-emerald-300 font-bold mb-2">{step.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals working together to revolutionize transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6">{member.description}</p>

                <div className="flex justify-center gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-emerald-600 transition"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-emerald-600 transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 from-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the solution that's revolutionizing urban mobility. Download Otoddy and experience intelligent convenience today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setShowDownloadModal(true)}
              className="bg-white text-secondary px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.5 3H6.5C5.67 3 5 3.67 5 4.5V19.5C5 20.33 5.67 21 6.5 21H17.5C18.33 21 19 20.33 19 19.5V4.5C19 3.67 18.33 3 17.5 3ZM17 18H7V6H17V18Z" />
              </svg>
              Soon For Download App
            </button>
            <button
              onClick={() => setShowWishlistModal(true)}
              className="bg-primary text-white px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              Join Wishlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
