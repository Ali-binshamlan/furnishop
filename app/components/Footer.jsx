"use client";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#23262F] text-white px-6 md:px-16 py-10">
      {/* Centered container with max width */}
      <div className="max-w-5xl mx-auto">
        {/* Header and social icons */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-xl font-bold">FurniShop</h1>

          <div className="flex gap-4 text-xl">
            {/* Social media icons with circle background and hover effects */}
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaInstagram className="hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaFacebookF className="hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaTwitter className="hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Footer links sections */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm mt-16">
          <div>
            <h3 className="font-semibold mb-3">Our Products</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  The Support Suite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  The Sales Suite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Top Features</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Help Desk Software
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Community Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Help Desk Software
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Product Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Request Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Peoplepower Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Favourite Things</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  For Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  For Startups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  For Benchmark
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  For Small Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-16 text-center text-gray-400 text-xs">
          © Eng: Ali Bin Shamlan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
