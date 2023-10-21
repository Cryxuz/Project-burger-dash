import Footer from './Footer'
import WavyBackground from './WavyBackground'

function Intro() {
  return (
    <div className="w-screen h-screen lg:flex items-center pt-[25%] md:pt-16 lg:pt-0">
      <div className="text-center text-slate-800 lg:w-1/2  lg:pl-[8%]">
        <h1 className="cursive text-7xl md:text-9xl">Burger Dash</h1>
        <p className="pt-10 cursive text-3xl md:text-5xl">
          Welcome to Burger Dash, where every bite is a burger adventure.
        </p>
      </div>
      <img className="h-[90%]" src="/images/intro.png" alt="" />

      <div className="flex items-end justify-end fixed bottom-0 right-0 left-0 pb-2 px-10">
        <Footer />
      </div>

      <WavyBackground />
    </div>
  )
}

export default Intro
