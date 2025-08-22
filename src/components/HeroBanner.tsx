"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const animatedText = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const HeroBanner = () => (
  <section
    className={`relative sticky top-0 z-40 shadow-md font-poppins bg-fixed bg-center bg-cover`}
    style={{
      backgroundImage:
        "linear-gradient(rgba(26, 35, 126, 0.85), rgba(26, 35, 126, 0.85)), url('/phot.jpeg')",
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* === Left Content === */}
        <motion.div
          className="space-y-8 text-white"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={{ whileInView: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="space-y-4" {...animatedText}>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Star className="h-4 w-4" />
              <span>Trusted Driver From OTOddy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              Own a Car,{" "}
              <span className="bg-gradient-to-r from-green-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-move">
                But Not the Stress.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
              Book professional drivers for your own car. Set your fare, choose
              your driver, and relax — we handle the journey while you stay in
              control.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4" {...animatedText}>
            <motion.button
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold text-base md:text-lg bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg animate-float"
              whileHover={{ scale: 1.07 }}
            >
              <span>Download App</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold text-base md:text-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.07 }}
            >
              <span>Soon</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-blue-200/40 text-center"
            {...animatedText}
          >
            <div>
              <div className="text-base md:text-lg font-semibold text-white">Launching Soon</div>
              <div className="text-blue-200 text-sm">Official App</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-semibold text-white">Driver Network</div>
              <div className="text-blue-200 text-sm">Onboarding</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-semibold text-white">Early Access</div>
              <div className="text-blue-200 text-sm">Be the First</div>
            </div>
          </motion.div>
        </motion.div>

        {/* === Right Image Side (Responsive Fix) === */}
        {/* === Right Image Side (Fixed Floating Cards) === */}
{/* === Right Image Side (Responsive Floating Cards) === */}
<div className="relative flex flex-col items-center sm:items-end">
  {/* Main Image */}
  <motion.div
    className="relative z-10"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.15, type: "spring" }}
  >
    <div className="relative p-2 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 shadow-xl">
      <img
        src="/bg.jpeg"
        alt="Otoddy Car & Driver Illustration"
        className="rounded-xl shadow-2xl w-[240px] sm:w-[320px] md:w-[420px] h-auto object-contain bg-white"
      />
    </div>
  </motion.div>

  {/* Floating Cards */}
  <div className="w-full flex flex-col items-center gap-4 mt-4
                  sm:mt-0 sm:absolute sm:top-8 sm:right-8 sm:w-auto sm:items-end">
    {/* Trusted Ride Card */}
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 w-[200px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-xl flex items-center justify-center shadow">
          <Star className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">Trusted Ride</div>
          <div className="text-xs text-gray-500">Book</div>
        </div>
      </div>
    </motion.div>

    {/* Safe & Secure Card */}
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 w-[200px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
          <span className="text-xl">🛡️</span>
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">Safe & Secure</div>
          <div className="text-xs text-gray-500">Verified Drivers</div>
        </div>
      </div>
    </motion.div>
  </div>
</div>



      </div>
    </div>
  </section>
);

export default HeroBanner;
