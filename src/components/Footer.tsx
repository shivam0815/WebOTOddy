import React from 'react';
import { Link } from 'react-router-dom';
import {
   Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';

const gradientBackground = "bg-gradient-to-r from-blue-800 via-indigo-700 to-indigo-900 animate-gradient-move";

const Footer = () => (
  <footer className={`relative overflow-hidden text-white ${gradientBackground}`}>
    <div className="absolute inset-0 bg-black/30 backdrop-blur-md pointer-events-none" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4 bg-white/5 rounded-2xl p-5 backdrop-blur-sm shadow-lg transition-transform hover:scale-[1.03]">
           <div className="flex items-center space-x-3">
    {/* Logo instead of Car icon */}
    <div className="p-2 rounded-xl shadow bg-gradient-to-br from-indigo-500 to-blue-500">
      <img
        src="/logo.png"   // <-- replace with your logo path
        alt="Otoddy Logo"
        className="h-8 w-8 object-contain drop-shadow"
      />
    </div>
    <span className="text-2xl font-bold tracking-wide drop-shadow">
      OTOddy
    </span>
  </div>
         <div className="flex space-x-4">
  {[
    { Icon: Facebook, href: "https://x.com/OTOddy_x" },
    { Icon: Twitter, href: "https://twitter.com" },
    { Icon: Instagram, href: "https://www.instagram.com/__otoddy/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/otoddy/" },
  ].map(({ Icon, href }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        className="h-5 w-5 text-blue-100 hover:text-emerald-400 transition-transform duration-200 drop-shadow-glow cursor-pointer hover:scale-125"
      />
    </a>
  ))}
</div>

        </div>

        {/* Quick Links */}
        <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm shadow-lg">
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/how-it-works", label: "How It Works" },
              { to: "/features", label: "Features" },
              { to: "/About", label: "About Us" },
              { to: "/driverApplication", label: "Driver Application" },
              { to: "/app-features", label: "App Features" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-blue-100 hover:text-emerald-400 hover:underline rounded transition-all duration-200 hover:bg-blue-900/30 px-2 py-1 block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm shadow-lg">
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Legal</h3>
          <ul className="space-y-2">
            {[
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/safety", label: "Safety Guidelines" },
              { to: "/support", label: "Support" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-blue-100 hover:text-emerald-400 hover:underline rounded transition-all duration-200 hover:bg-blue-900/30 px-2 py-1 block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm shadow-lg">
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-emerald-400 animate-pulse" />
              <span className="text-blue-100">info@otoddy.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-emerald-400 animate-pulse" />
              <span className="text-blue-100">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-emerald-400" />
              <span className="text-blue-100">Delhi, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="border-t border-blue-800 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm tracking-wide text-center">
            © 2025 OTOddy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-blue-200 text-sm tracking-wide">
            
            <span className="hover:text-emerald-300 transition-colors">Team OTOddy</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
