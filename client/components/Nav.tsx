const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="text-slate-800 container mx-auto flex justify-center items-center gap-12 pt-2   text-2xl">
        <a className="font-bold" href="#about">
          About
        </a>
        <a className="font-bold" href="#menu">
          Menu
        </a>
        <a className="font-bold" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
