import { useEffect, useState } from 'react'
import home from '/images/home.webp'
import eatImage from '/images/carousel-img-2.webp'
import drinkImage from '/images/drinks.webp'
import visitImage from '/images/visit.webp'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Intro() {
  const [bgImage, setBgImage] = useState(home)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleEatHover = () => {
    setBgImage(eatImage)
  }

  const handleDrinkHover = () => {
    setBgImage(drinkImage)
  }

  const handleVisitHover = () => {
    setBgImage(visitImage)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="w-screen h-screen overflow-hidden bg-cover bg-no-repeat bg-center  p-[15%] items-center transition-all duration-700  "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pt-[50%] md:mb-[5%] md:pt-[0%] text-center text-white">
        <h1 className="cursive text-7xl md:text-9xl ">Ember Bistro</h1>
        <p className="pt-[10%] md:pt-0 cursive text-3xl md:text-5xl">
          Where Culinary Artistry Meets Timeless Flavours
        </p>
      </div>
      <div></div>
      <div className="pt-[20%] md:pt-0 md:flex text-center justify-center text-white ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-3xl md:text-6xl hover:underline py-[2%] px-[5%] "
          onMouseEnter={handleEatHover}
        >
          <Link to="/menu">Eat</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-3xl  md:text-6xl hover:underline py-[2%] px-[5%]"
          onMouseEnter={handleDrinkHover}
        >
          <Link to="/menu">Drink</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-3xl  md:text-6xl hover:underline py-[2%] px-[5%]"
          onMouseEnter={handleVisitHover}
        >
          <Link to="/contact">Visit</Link>
        </motion.div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 left-0 pb-2 px-10">
        <Footer />
      </div>
    </motion.div>
  )
}

export default Intro
