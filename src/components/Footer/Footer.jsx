import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Top Destinations",
    link: "/best-places",
  },
  {
    title: "Travel Blog",
    link: "/blogs",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
];


const Footer = () => {
  return (
    <div className="relative overflow-hidden dark:bg-gray-950">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full w-full object-cover z-[-2]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-[-1]"></div>

      <div className="container mx-auto px-4 py-12 text-white">
        <div className="grid md:grid-cols-4 gap-10 backdrop-blur-sm bg-white/10 p-6 rounded-xl">
          {/* Branding */}
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-bold">
              <img src={FooterLogo} alt="logo" className="max-h-[50px]" />
              TravelloGo
            </h1>
            <p className="mt-3 text-sm">
              Discover unforgettable destinations, curated tours, and travel
              tips to make every trip amazing.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <FaLocationArrow />
                Bahawalpur, Punjab, Pakistan
              </div>
              <div className="flex items-center gap-2">
                <FaMobileAlt />
                +92 302 7877556
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                kashifsaeedman@gmail.com
              </div>
            </div>
            <div className="flex gap-4 mt-5 text-2xl">
              <a
                href="#"
                className="hover:scale-110 duration-300 text-pink-400"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:scale-110 duration-300 text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:scale-110 duration-300 text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="flex flex-col gap-3 text-sm">
              {FooterLinks.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-primary hover:translate-x-1 duration-200"
                >
                  <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Travel Resources</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="hover:text-primary duration-200 cursor-pointer">
                Travel Guides
              </li>
              <li className="hover:text-primary duration-200 cursor-pointer">
                Booking Information
              </li>
              <li className="hover:text-primary duration-200 cursor-pointer">
                Frequently Asked Questions
              </li>
              <li className="hover:text-primary duration-200 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-primary duration-200 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-primary duration-200 cursor-pointer">
                Contact Support
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for updates and deals.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none"
            />
            <button className="mt-3 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md w-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-10 text-sm border-t border-white/30 pt-6">
          © 2024 All rights reserved | Made with ❤️ by{" "}
          <strong>Kashif Saeed</strong>
        </div>
      </div>
    </div>
  );
};

export default Footer;
