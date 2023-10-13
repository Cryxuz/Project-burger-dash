import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Menu",
    link: "#menu"
  },
  {
    title: "Booking",
    link: "/booking"
  },
  {
    title: "Story",
    link: "#story"
  },
  {
    title: "Contact",
    link: "/contact"
  },
];

function Nav() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-full bg-inherit">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16">
          
          {/* Nav links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <a
                  className="text-white transition-all duration-500 hover:underline hover:text-gray-300 px-3 py-2 rounded-md font-medium text-2xl"
                  key={index}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* Hamburger menu */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-500 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <a
                className="text-gray-300 hover:bg-gray-500 hover:bg-opacity-30 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                key={index}
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Nav;