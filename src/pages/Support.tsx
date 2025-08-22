"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  CreditCard,
  Car,
  BookOpen,
  Star,
  Clock,
} from "lucide-react";
import Seo from "../components/Seo";

// Floating animation for background bubbles
const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const Support = () => {
  const categories = [
    {
      icon: HelpCircle,
      title: "FAQs",
      description:
        "Find quick answers to the most common questions about Otoddy.",
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description:
        "Learn about our driver verification, safety checks, and rider protection.",
    },
    {
      icon: CreditCard,
      title: "Payments",
      description:
        "Understand fares, payments, refunds, and pricing transparency.",
    },
    {
      icon: Car,
      title: "Technical Support",
      description: "Report app issues, login errors, or problems with bookings.",
    },
  ];

  const faqs = [
    {
      q: "How do I book a driver with Otoddy?",
      a: "Simply open the app, set your fare, choose your driver, and confirm the ride.",
    },
    {
      q: "Is it safe to hand over my car to a driver?",
      a: "Yes. All drivers go through strict verification and background checks.",
    },
    {
      q: "Can I schedule a ride in advance?",
      a: "Yes, Otoddy allows you to pre-book a driver for a later time slot.",
    },
  ];

  const guides = [
    {
      icon: BookOpen,
      title: "How to Book a Driver",
      steps: [
        "Open the Otoddy App",
        "Choose Booking Type (Hourly/Daily/Outstation)",
        "Select Available Driver",
        "Confirm & Pay",
      ],
    },
    {
      icon: Clock,
      title: "How to Cancel a Booking",
      steps: [
        "Go to Booking History",
        "Tap on the Active Booking",
        "Click Cancel Booking",
        "Refund is processed instantly",
      ],
    },
    {
      icon: Star,
      title: "How to Rate a Driver",
      steps: [
        "Open Completed Booking",
        "Tap Rate Driver",
        "Give Stars & Feedback",
        "Submit",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white relative overflow-hidden">
      {/* SEO */}
      <Seo
        title="Support | Otoddy Customer Care"
        description="Need help with Otoddy? Contact our support team anytime for assistance with bookings, drivers, or app issues."
        url="https://otoddy.com/support"
        image="/support-preview.jpg"
        keywords="otoddy support, customer care, driver booking help"
      />

      {/* Modern Hero Section (White Background) */}
      <section className="relative py-24 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Need <span className="text-emerald-600">Help?</span> We’re Here for You
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you’re a driver or a rider, our support resources and team 
            are available 24/7 to make your Otoddy experience smooth and secure.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="px-6 py-3 rounded-xl bg-gray-100 text-gray-900 font-semibold shadow-md hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
            >
              Browse FAQs
            </motion.button>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Floating blobs (start after white hero) */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
        {...floatAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl"
        {...floatAnimation}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-40 right-1/3 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"
        {...floatAnimation}
        transition={{ delay: 2 }}
      />

      {/* Quick Help Buttons */}
      <section className="py-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
          {[
            { icon: Car, label: "Book a Driver" },
            { icon: CreditCard, label: "Payments" },
            { icon: Shield, label: "Safety" },
          ].map((item, i) => (
            <motion.button
              key={i}
              className="bg-white/10 hover:bg-white/20 transition px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <item.icon className="w-6 h-6 text-emerald-300" />
              <span className="font-semibold">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <cat.icon className="w-12 h-12 mx-auto text-emerald-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-sm text-blue-200">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Step-by-Step Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <guide.icon className="w-10 h-10 text-emerald-300 mb-4" />
                <h3 className="text-lg font-semibold mb-4">{guide.title}</h3>
                <ul className="text-sm text-blue-200 space-y-2">
                  {guide.steps.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 rounded-xl cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <details>
                  <summary className="font-semibold text-lg cursor-pointer">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-blue-200">{faq.a}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Still Need Help?</h2>
          <p className="text-blue-200 mb-12">
            Reach us anytime through the options below:
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl flex flex-col items-center">
              <Phone className="w-8 h-8 text-emerald-300 mb-3" />
              <span className="font-semibold">Call Us</span>
              <p className="text-blue-200 text-sm">+91 9799722138</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center">
              <Mail className="w-8 h-8 text-emerald-300 mb-3" />
              <span className="font-semibold">Email Support</span>
              <p className="text-blue-200 text-sm">info@otoddy.com</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center">
              <MessageCircle className="w-8 h-8 text-emerald-300 mb-3" />
              <span className="font-semibold">WhatsApp</span>
              <p className="text-blue-200 text-sm">+91 9799722138</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Support;
