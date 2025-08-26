import React, { useRef, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import { DollarSign, UserCheck, MapPin, Shield, Lock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Home: React.FC = () => {
  // Waitlist (email input block)
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Download popup
  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);

  // For scrolling to the email input
  const joinRef = useRef<HTMLDivElement | null>(null);

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Background Verified",
      description:
        "Comprehensive background checks, driving record verification, and identity confirmation for every driver.",
    },
    {
      icon: Lock,
      title: "Insurance Protected",
      description:
        "Full insurance coverage during every ride, protecting both you and your vehicle with comprehensive policies.",
    },
    {
      icon: Navigation,
      title: "Real-Time Tracking",
      description:
        "Live GPS tracking, emergency contacts, and 24/7 support ensure you're always connected and safe.",
    },
  ];

  const howItWorksSteps = [
    {
      icon: DollarSign,
      title: "Step 1: Open the App",
      description:
        "Choose your pickup location, duration, and the hours you need a driver for.",
    },
    {
      icon: UserCheck,
      title: "Step 2: Select Your Driver",
      description:
        "Browse verified drivers, check ratings, and pick the one you like.",
    },
    {
      icon: MapPin,
      title: "Step 3: Enjoy the Ride",
      description:
        "Sit back and relax while your chosen driver takes care of the road.",
    },
  ];

 const handleJoinWaitlist = async () => {
  setSuccess("");
  setErrorMsg("");

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    setErrorMsg("Please enter a valid email address.");
    return;
  }

  setLoading(true);
  try {
    await addDoc(collection(db, "waitlist"), {
      email,
      createdAt: serverTimestamp(),
    });
    setSuccess("Successfully joined the waitlist! 🎉");
    setEmail("");
  } catch (err: unknown) {
    let message = "Something went wrong. Please try again.";
    if (err instanceof Error) {
      message = err.message;
    }
    console.error("Firestore addDoc error:", err);
    setErrorMsg(message);
  } finally {
    setLoading(false);
  }
};


  const scrollToJoin = () => {
    joinRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-700 shadow-md overflow-hidden">
      {/* SEO */}
      <Seo
        title="Otoddy | Hire Trusted Drivers for Your Car"
        description="Otoddy connects you with reliable, verified, and professional drivers for your daily commute or long trips. Safe, affordable, and easy."
        url="https://otoddy.com/"
        image="/default-preview.jpg"
        keywords="hire drivers, car drivers, otoddy, trusted drivers, driver booking"
      />

      {/* Hero Section */}
      <HeroBanner />

      {/* Story Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/20"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
              Born from a Crisis Moment
            </h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              It was 2 AM after a 14-hour workday. I was exhausted, sitting in
              my car, knowing I shouldn’t drive but having no other option.
              That’s when I realized – millions of urban professionals face this
              same dilemma every day.
            </p>
            <p className="text-gray-200 leading-relaxed mb-6">
              Otoddy was born from that moment of vulnerability. We believe car
              ownership shouldn’t mean you always have to drive. Sometimes, the
              smartest choice is letting someone else take the wheel.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/crisis.png"
              alt="Otoddy Story"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-radial from-indigo-900/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section (with email join block) */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              How Otoddy Works
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, flexible way to hire a trusted driver for your own car — launching soon.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-3xl p-10 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Join Email Block */}
          <div ref={joinRef} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-96"
            />
            <motion.button
              onClick={handleJoinWaitlist}
              disabled={loading}
              className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Joining..." : "Join Waitlist 🚀"}
            </motion.button>
          </div>

          {/* Messages */}
          {success && (
            <p className="text-green-600 text-center mt-4 font-medium">{success}</p>
          )}
          {errorMsg && (
            <p className="text-red-600 text-center mt-4 font-medium">{errorMsg}</p>
          )}
        </div>
      </section>

      {/* Safety First Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Safety First, Always
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Every Otoddy driver undergoes comprehensive verification. Your safety and peace of mind are our top priorities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 text-white shadow-lg">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Download + Join) */}
      <section className="relative py-28 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-xl">
            Ready to Get Started?
          </h2>
          <p className="text-lg lg:text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Be among the first to experience stress-free driving. Soon, you’ll be able to book trusted drivers for your own car, anytime you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button
              onClick={() => setShowDownloadModal(true)}
              className="bg-white text-cyan-600 px-10 py-4 rounded-2xl font-semibold shadow-lg shadow-white/30 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Download Soon
            </motion.button>
            <motion.button
              onClick={scrollToJoin}
              className="border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-cyan-600 shadow-lg hover:shadow-white/30 transition-all duration-300 transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Thanks for your patience! 🙏</h3>
            <p className="text-gray-700">
              We’re putting on the final polish. The app will be live soon — stay tuned!
            </p>
            <button
              onClick={() => setShowDownloadModal(false)}
              className="mt-6 bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
