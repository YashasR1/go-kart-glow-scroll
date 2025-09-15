import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link as Link1 } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", to: "home", type: "scroll" },
    { name: "Track", to: "location", type: "scroll" },
    { name: "About", to: "contact", type: "scroll" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      id="navbar"
      initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      className={`max-w-6xl mx-auto fixed lg:top-4 lg:left-6 lg:right-6 top-0 left-0 right-0 z-50 lg:border border-b border-1 lg:border-1 lg:rounded-xl border-gray-700 bg-transparent transition-all duration-300 ease-out ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0 items-center pl-2">
            <Link1
              to="/"
              className="flex items-center space-x-2 text-white transition-opacity duration-200 z-100"
            >
              <div className="flex items-center">
                <span className="text-2xl p-0 lg:block figtree-text">
                  Grips
                </span>
              </div>
            </Link1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block figtree-text">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) =>
                item.type === "scroll" ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={1500}
                    offset={-70}
                    spy={true}
                    className="cursor-pointer text-white hover:text-gray-300 px-3 py-2 text-sm font-medium relative group hover:bg-red-600 rounded-lg transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.to}
                    className="cursor-pointer text-white hover:text-gray-300 px-3 py-2 text-sm font-medium relative group hover:bg-red-600 rounded-lg transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              variant="default"
              className="figtree-text bg-navbar-button hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 ease-out transform hover:scale-105 hover:shadow-lg group"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white transition-all duration-200 ease-out"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Menu
                  className={`absolute w-6 h-6 transition-all duration-300 ease-out transform ${
                    isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute w-6 h-6 transition-all duration-300 ease-out transform ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Mobile Menu */}
      <div
        className={`figtree-text md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen
            ? "max-h-[1000px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-black/90 backdrop-blur-md border-t border-gray-700 rounded-b-xl shadow-lg">
          {navItems.map((item) =>
            item.type === "scroll" ? (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer text-white px-3 py-1 text-base font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-purple-300"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.to}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer text-white px-3 py-1 text-base font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-purple-300"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
