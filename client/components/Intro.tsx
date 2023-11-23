import { Link } from 'react-router-dom'

function Intro() {
  return (
    <div
      id="home"
      className="h-screen lg:flex items-center pt-[3%] md:pt-16 lg:pt-0"
    >
      <div className="text-center text-slate-800 lg:w-1/2  lg:pl-[8%]">
        <h1 className="cursive text-7xl md:text-9xl">Burger Dash</h1>
        <p className="pt-10 cursive text-3xl md:text-5xl">
          Welcome to Burger Dash, where every bite is a burger adventure.
        </p>
        <Link to="/bookings">
          <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-xl m-[5%]">
            Book Now
          </button>
        </Link>
      </div>
      <img
        className=" mx-auto h-[75%] lg:h-[90%]"
        src="/images/intro.png"
        alt=""
      />
    </div>
  )
}

export default Intro
