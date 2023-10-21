import { useState, useEffect } from 'react'
import Footer from './Footer'

function Story() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`xl:flex px-[10%] gap-[5%]  pt-[15%] xl:pt-[5%] `}>
      {/* <div className="text-center items-center justify-center">
        <ul className=" hidden xl:block pt-[5%]">
          <h2>Lead Staff</h2>
          <br />
          <p className="pb-[5%]">Stanley & Paul</p>
          <p>-</p>
          <p className="italic text-sm">Owners</p>
          <br />
          <p className="pb-[5%]"> Auguste Escoffier</p>
          <p>-</p>
          <p className="italic  text-sm">Executive Chef</p>
          <br />
          <p className="pb-[5%]">Felix Sterling</p>
          <p>-</p>
          <p className="italic text-sm">General Manager</p>
          <br />
          <p className="pb-[5%]">Andrea Robinson</p>
          <p>-</p>
          <p className="italic text-sm">Sommelier</p>
        </ul>
      </div> */}

      <div className="pt-[10%] xl:pt-[0] m-[5%]">
        <p className="text-center text-xl md:text-2xl lg:text-sm xl:text-3xl text-white">
          in 1957, nestled in the heart of Queenstown, a small burger place was
          born. It was named "Burger Dash," and it quickly became a local
          legend. With its secret family recipe, the juiciest patties, and a
          timeless charm, Burger Dash served generations of happy customers.
          Today, it stands as a cherished part of Queenstown's history, where
          every bite is a bite of nostalgia and delicious tradition.
        </p>
        <br />
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 left-0 pb-2 px-10">
        <Footer />
      </div>
    </div>
  )
}

export default Story
