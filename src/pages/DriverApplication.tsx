import React, { useState } from "react";
import {
  FileText,
  FileCheck2,
  CheckCircle,
  Car,
  GraduationCap,
  Award,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const verificationSteps = [
  { icon: FileText, label: "Apply" },
  { icon: FileCheck2, label: "Documents" },
  { icon: CheckCircle, label: "Verification" },
  { icon: Car, label: "Vehicle Check" },
  { icon: GraduationCap, label: "Training" },
  { icon: Award, label: "Approved" },
];

const requirements: string[] = [
  "Age 21+ years",
  "Valid driving license",
  "Clean driving record",
  "Valid Aadhar Card",
  "Professional attitude",
  "Background verification clearance",
  "Physical fitness certificate",
];

const DriverApplication: React.FC = () => {
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(6);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // This controls which step is active (0-based index)
  // Change this value from 0 to 5 to mark steps completed
  const [activeStep, setActiveStep] = useState(0);

  const calculateEarnings = () => {
    const hourlyRate = 200;
    const monthlyHours = hoursPerDay * daysPerWeek * 4;
    return monthlyHours * hourlyRate;
  };

  const handleJoinWaitlist = async () => {
    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "waitlist"), {
        email,
        createdAt: serverTimestamp(),
        type: "driver",
      });
      setMessage("🎉 You're on the waitlist!");
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // For demo: advance active step on button click (simulate progress)
  const handleNextStep = () => {
    setActiveStep((prev) => (prev < verificationSteps.length - 1 ? prev + 1 : prev));
  };
  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Seo
        title="Become a Driver | Join Otoddy"
        description="Apply to become a trusted driver with Otoddy. Enjoy flexible hours, reliable earnings, and a community built on trust."
        url="https://otoddy.com/driverapplication"
        image="/driver-preview.jpg"
        keywords="driver application, join otoddy, driver jobs"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Drive with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-600">
              Otoddy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join our network of professional drivers and earn competitive income while providing excellent service to car owners.
          </motion.p>
        </div>
      </section>

      {/* Stepper Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 text-center mb-2"
          >
            Simple Application Process
          </motion.h2>
          <p className="text-center text-gray-500 mb-10 text-lg">
            Get approved in 6 easy steps. Our comprehensive verification process ensures safety for everyone while getting you on the road quickly.
          </p>

          {/* Progress line container */}
          <div className="relative flex items-center mb-8 h-2">
            {/* Background line */}
            <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
            {/* Active progress bar line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(activeStep / (verificationSteps.length - 1)) * 100}%` }}
              transition={{ duration: 1 }}
              className="absolute h-2 bg-emerald-400 rounded-full"
              style={{ width: `${(activeStep / (verificationSteps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-6 gap-2 md:gap-4">
            {verificationSteps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeStep;
              return (
                <motion.div
                  key={step.label}
                  initial={{ y: 30, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 120 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-full mb-2 border-4 shadow-lg ${
                      isActive
                        ? "bg-emerald-400 border-emerald-200 text-white"
                        : "bg-gray-200 border-gray-200 text-gray-400"
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${isActive ? "text-white" : "text-gray-400"}`} />
                  </div>
                  <div className={`mb-1 font-semibold text-center text-sm ${isActive ? "text-emerald-600" : "text-gray-400"}`}>
                    {step.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Demo buttons to control stepper */}
          <div className="flex justify-center mt-8 gap-6">
            <button
              onClick={handlePrevStep}
              disabled={activeStep === 0}
              className="px-6 py-2 rounded-lg border border-emerald-600 text-emerald-600 font-semibold disabled:opacity-40"
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              disabled={activeStep === verificationSteps.length - 1}
              className="px-6 py-2 rounded-lg bg-emerald-600 text-white font-semibold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Calculate Your Earnings</h2>
              <p className="text-emerald-100">See how much you can earn as an Otoddy driver</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <label className="block text-emerald-100 text-sm font-medium mb-2">
                    Hours per day: {hoursPerDay}
                  </label>
                  <input
                    type="range"
                    min={4}
                    max={12}
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-400 rounded-lg cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-emerald-100 text-sm font-medium mb-2">
                    Days per week: {daysPerWeek}
                  </label>
                  <input
                    type="range"
                    min={3}
                    max={7}
                    value={daysPerWeek}
                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-400 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-gray-600 text-sm mb-2">Estimated Monthly Earnings</div>
                <div className="text-4xl font-bold text-emerald-600 mb-4">
                  ₹{calculateEarnings().toLocaleString()}
                </div>
                <div className="text-gray-500 text-sm">Based on ₹200/hour rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Driver{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-600">
                Requirements
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/dd.png" alt="Professional driver" className="rounded-2xl shadow-2xl w-full" />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
        <p className="text-xl text-emerald-100 mb-8">
          Join our growing network of professional drivers and build a rewarding career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold">
            Soon Available on Play Store
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all"
          >
            Excited?
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4">
              <X className="h-6 w-6 text-gray-500" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Waitlist</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mb-4"
              autoFocus
            />
            {message && <p className="text-sm text-center mb-4">{message}</p>}
            <button
              onClick={handleJoinWaitlist}
              disabled={loading}
              className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Join Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverApplication;
