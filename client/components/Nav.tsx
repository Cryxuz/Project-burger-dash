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
          Burger Dash
        </div>
      </div>
    </nav>
  )
}

export default Navbar
