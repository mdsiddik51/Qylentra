"use client";

import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-700 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
       
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
              <span className="text-3xl">🩺</span>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight">
                Qylentra
              </h2>

              <p className="text-sm text-white/80">
                Smart Doctor Appointment Platform
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-white/80 max-w-sm">
            Book appointments with trusted doctors, specialists, and clinics
            across Bangladesh with a fast and secure healthcare platform.
          </p>

         
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/10 hover:scale-110"
            >
              <FaFacebookF className="text-lg" />
            </a>

            <a
              href="#"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/10 hover:scale-110"
            >
              <FaInstagram className="text-lg" />
            </a>

            <a
              href="#"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/10 hover:scale-110"
            >
              <FaTwitter className="text-lg" />
            </a>

            <a
              href="#"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/10 hover:scale-110"
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            <a
              href="#"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/10 hover:scale-110"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-white/80">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>

            <li>
              <a
                href="/allappointment"
                className="hover:text-white transition-colors"
              >
                Appointment
              </a>
            </li>

            <li>
              <a
                href="/dashboard"
                className="hover:text-white transition-colors"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-bold mb-5">Why Choose Us</h3>

          <ul className="space-y-5">
            <li>
              <div>
                <h4 className="font-bold text-white mb-1">
                  Trusted Doctors
                </h4>

                <p className="text-sm text-white/80">
                  Verified healthcare professionals with years of experience.
                </p>
              </div>
            </li>

            <li>
              <div>
                <h4 className="font-bold text-white mb-1">
                  Easy Appointment Booking
                </h4>

                <p className="text-sm text-white/80">
                  Book appointments online in just a few clicks anytime.
                </p>
              </div>
            </li>

            <li>
              <div>
                <h4 className="font-bold text-white mb-1">
                  24/7 Support
                </h4>

                <p className="text-sm text-white/80">
                  Dedicated support team ready to help patients and doctors.
                </p>
              </div>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>

          <div className="space-y-4 text-white/80">
            <p>📍 Dhaka, Bangladesh</p>

            <p>📧 support@qylentra.com</p>

            <p>📞 +880 1234-567890</p>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 mt-5 border border-white/10">
              <p className="font-semibold text-white mb-1">
                Your Health, Our Priority
              </p>

              <p className="text-sm text-white/70">
                Connecting patients with trusted healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="border-t border-white/15 mt-14 pt-6 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} Qylentra. All rights reserved.</p>

        <p className="mt-2">
          Trusted Doctors • Online Booking • Better Healthcare
        </p>
      </div>
    </footer>
  );
};

export default Footer;