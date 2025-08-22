import React from "react";
import {
  DollarSign,
  UserCheck,
  MapPin,
  Smartphone,
  Shield,
  Clock,
} from "lucide-react";
import Seo from "../components/Seo";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Download & Register",
      description:
        "Download the Otoddy app and create your account in minutes. Verify your identity and car details.",
      details: [
        "Email & phone verification",
        "Upload driving license",
        "Car registration details",
      ],
      image:
        "/ren2.jpg",
    },
    
    {
      icon: UserCheck,
      title: "Choose Your Driver",
      description:
        "Browse through verified driver profiles, check ratings, reviews, and pick the perfect match.",
      details: [
        "Driver background checks",
        "Rating & review system",
        "Profile verification",
      ],
      image:
        "/ren3.png",
    },
    {
      icon: MapPin,
      title: "Track & Relax",
      description:
        "Real-time GPS tracking keeps you informed. Sit back, relax, and enjoy your journey.",
      details: ["Live location tracking", "ETA updates", "Journey notifications"],
      image:
        "/ren4.png",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "All drivers are thoroughly vetted with background checks and driving record verification.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Book instantly or schedule in advance. Our drivers adapt to your timeline.",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description:
        "Save money compared to traditional taxi services while using your own car.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Seo
        title="How Otoddy Works | Hire Drivers in 3 Easy Steps"
        description="Booking a driver with Otoddy is quick and simple. Learn how our platform ensures convenience, safety, and reliability for every ride."
        url="https://otoddy.com/how-it-works"
        image="/how-it-works-preview.jpg"
        keywords="how otoddy works, driver booking process, car driver app"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Getting a professional driver for your personal car is simple, safe,
            and straightforward. Here's how our platform works.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="border-l-4 border-emerald-500 ml-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="mb-16 ml-10 flex flex-col lg:flex-row items-start lg:items-center gap-10"
              >
                {/* Icon + Step Info */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                      Step {index + 1}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Image */}
                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Otoddy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another ride service. We're your trusted partner
              for safe, reliable, and affordable transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Launching soon — built for safety, convenience, and affordability in every ride
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
            Get Started Soon
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
