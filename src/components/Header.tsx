import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/About" },
    { name: "Features", href: "/features" },
    { name: "Support", href: "/Support" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-indigo-700 shadow-md font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="./logo.png" // replace with your logo file
              alt="Otoddy Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">OTOddy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-white font-semibold"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/DriverApplication"
              className="px-6 py-2 rounded-full font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors inline-block"
            >
              Drive with Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-blue-700 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-6 border-t border-blue-700 bg-gradient-to-r from-blue-900 to-indigo-800">
          <div className="space-y-2 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(item.href)
                    ? "text-white bg-blue-700"
                    : "text-gray-200 hover:text-white hover:bg-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button (Mobile) */}
            <div className="pt-4">
              <Link
                to="/DriverApplication"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-6 py-2 rounded-full font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors text-center block"
              >
                Drive with Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
