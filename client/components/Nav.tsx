import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

function Nav() {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="w-full bg-inherit fixed">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between md:justify-center h-16 ">
          {/* Nav links */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-4 sans-serif text-3xl gap-5 text-slate-800 ">
              <RouterLink to="/" onClick={handleClick}>
                <button className="hover:underline">Home</button>
              </RouterLink>
              <ScrollLink to="story" spy={true} smooth={true} duration={500}>
                <button className="hover:underline">Story</button>
              </ScrollLink>
              <ScrollLink to="menu" spy={true} smooth={true} duration={500}>
                <button className="hover:underline">Menu</button>
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                <button className="hover:underline">Contact</button>
              </ScrollLink>
              <RouterLink to="/bookings">
                <button className="hover:underline">Booking</button>
              </RouterLink>
            </ul>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col text-slate-800">
            <RouterLink className="" to="/" onClick={handleClick}>
              <button className="hover:underline">Home</button>
            </RouterLink>
            <ScrollLink to="story" spy={true} smooth={true} duration={500}>
              <button className="hover:underline"> Story</button>
            </ScrollLink>
            <ScrollLink to="menu" spy={true} smooth={true} duration={500}>
              <button className="hover:underline">Menu</button>
            </ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
              <button className="hover:underline">Contact</button>
            </ScrollLink>
            <RouterLink to="/bookings">
              <button className="hover:underline">Booking</button>
            </RouterLink>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Nav
