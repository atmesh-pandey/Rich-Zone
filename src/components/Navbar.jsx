import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../public/stylesheets/style.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#main-category", label: "Category" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact us" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white top-0 left-0 w-full z-50 border-b border-red-600 backdrop-blur-md">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => setActive("/")}>
            <img src="/images/logo.webp" alt="EuroPlas Logo" className="h-10 sm:h-12 w-auto" />
          </Link>
        </div>

        {/* Nav Section */}
        <div className="flex items-center flex-wrap justify-end gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 flex-grow">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden sm:block relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px]">
            <input
              type="text"
              name="q"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-600 text-sm"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </button>
          </form>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center flex-wrap gap-x-4 lg:gap-x-6 text-sm md:text-[15px] font-normal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setActive(link.href)}
                className={`relative underline-animation ${active === link.href ? "active-link" : "hover:text-blue-600 text-gray-800"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800 focus:outline-none">
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            // <Link
            //   key={link.href}
            //   to={link.href}
            //   onClick={() => {
            //     setActive(link.href);
            //     setMenuOpen(false);
            //   }}
            //   className={`block text-md font-medium ${
            //     active === link.href ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
            //   }`}
            // >
            <a href={link.href} className={`block text-md font-medium ${active === link.href ? "text-blue-600" : "text-gray-800 hover:text-blue-600"}`}>
              {link.label}
            </a>
            // </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
