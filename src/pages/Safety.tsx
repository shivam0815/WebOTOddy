"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  UserCheck,
  Car,
  Phone,
  Clock,
  Star,
  FileCheck,
  Camera,
  AlertTriangle,
} from "lucide-react";
import Seo from "../components/Seo";

// Floating animation
const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const Safety = () => {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Verified Drivers",
      desc: "Every driver goes through background checks, ID verification, and driving history audits before joining Otoddy.",
    },
    {
      icon: Car,
      title: "Vehicle Safety",
      desc: "We ensure drivers operate responsibly and maintain safe driving standards while handling your car.",
    },
    {
      icon: Phone,
      title: "24/7 Emergency Support",
      desc: "Instant helpline and in-app SOS button available anytime during your booking.",
    },
    {
      icon: Clock,
      title: "Live Tracking",
      desc: "Track your car in real-time and share the journey with friends or family.",
    },
    {
      icon: Camera,
      title: "Ride Monitoring",
      desc: "All trips are monitored for unusual activities to ensure complete safety and trust.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      desc: "In case of any emergency, our rapid response team is trained to act immediately.",
    },
  ];

  const safetySteps = [
    {
      icon: FileCheck,
      title: "Before Your Ride",
      steps: [
        "Choose your driver from verified profiles",
        "Check ratings & reviews",
        "Confirm booking with transparent pricing",
      ],
    },
    {
      icon: Shield,
      title: "During Your Ride",
      steps: [
        "Track car location in real-time",
        "Use in-app SOS in emergencies",
        "Stay connected with 24/7 support",
      ],
    },
    {
      icon: Star,
      title: "After Your Ride",
      steps: [
        "Rate your driver",
        "Report any issue instantly",
        "Get refund or resolution support if needed",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-700 text-white relative overflow-hidden">
      {/* SEO */}
      <Seo
        title="Safety & Trust | Otoddy"
        description="Your safety is our priority. Learn how Otoddy ensures secure, verified, and trusted hourly-based on-demand driver services."
        url="https://otoddy.com/safety"
        image="/safety-preview.jpg"
        keywords="otoddy safety, secure driver booking, verified drivers"
      />

      {/* Floating cinematic blobs */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"
        {...floatAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl"
        {...floatAnimation}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"
        {...floatAnimation}
        transition={{ delay: 2 }}
      />

      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-white to-gray-100 text-gray-900 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Your <span className="text-emerald-600">Safety</span>, Our Promise
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every Otoddy ride is built on trust. From verified drivers to 24/7
          support, we make sure your car and your time are in safe hands.
        </p>
      </section>

      {/* Safety Features */}
      <section className="py-20 relative z-10 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Keep You Safe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {safetyFeatures.map((feat, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 rounded-2xl shadow-xl bg-white/5 hover:bg-white/10 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <feat.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-blue-200 text-sm">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Steps */}
      <section className="py-20 relative z-10 bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Safety At Every Step
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {safetySteps.map((step, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <step.icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
                <ul className="text-sm text-blue-200 space-y-2">
                  {step.steps.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Drive Safe. Ride Safe. Always.
        </h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Your peace of mind is at the heart of every Otoddy journey.  
          Book with confidence — because your safety is non-negotiable.
        </p>
        <motion.button
          className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          About Safety
        </motion.button>
      </section>
    </div>
  );
};

export default Safety;
