import { useState, useEffect } from 'react'
import main from '/images/visit.jpg'
import Footer from './Footer'

function Intro() {
  const [bgImage, setBgImage] = useState(main)

  return (
    <div
      className={`w-screen h-screen overflow-hidden bg-cover bg-no-repeat bg-center p-[15%] items-center transition-opacity duration-700 `}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pt-[50%] md:mb-[5%] md:pt-[0%] text-center text-white">
        <h1 className="cursive text-7xl md:text-9xl">Ember Bistro</h1>
        <p className="pt-[10%] md:pt-0 cursive text-3xl md:text-5xl">
          Where Culinary Artistry Meets Timeless Flavours
        </p>
      </div>
      <div></div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 left-0 pb-2 px-10">
        <Footer />
      </div>
    </div>
  )
}

export default Intro
