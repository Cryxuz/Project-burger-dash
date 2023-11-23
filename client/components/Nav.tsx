import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <nav className="py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-4xl font-semibold cursive">
          <img className="inline pr-5" src="/images/logo.png" alt="" />
          Tailored Tails
        </div>
        <div className="hidden md:block space-x-10">
          {/* Your navigation links */}
        </div>
        {/* hamburger menu */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-300 hover:bg-gray-500 hover-bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Toggle Main Menu</span>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open ? (
          <div className="md:hidden">
            <div className="px-2 space-y-1 sm:px-3 flex flex-col">
              <button
                type="button"
                onClick={handleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-300 hover:bg-gray-500 hover-bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Close Main Menu</span>
                <FaTimes />
              </button>
              <Link
                to="/"
                className="text-black font-semibold hover:underline merriweather text-xl"
              >
                Home
              </Link>
              <Link
                to="/items"
                className="text-black font-semibold hover:underline merriweather text-xl"
              >
                Items
              </Link>
              <Link
                to="/category"
                className="text-black font-semibold hover:underline merriweather text-xl"
              >
                Category
              </Link>
              <Link
                to="/cart"
                className="text-black font-semibold hover:underline merriweather text-xl"
              >
                Cart
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
