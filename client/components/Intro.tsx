import { useState } from 'react';
import home from '/images/home.jpg';
import eatImage from '/images/carousel-img-2.jpg';
import drinkImage from '/images/drinks.jpg';
import visitImage from '/images/visit.jpg';

function Intro() {
  const [bgImage, setBgImage] = useState(home);

  const handleEatHover = () => {
    setBgImage(eatImage);
  };

  const handleDrinkHover = () => {
    setBgImage(drinkImage);
  };

  const handleVisitHover = () => {
    setBgImage(visitImage);
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-cover bg-no-repeat bg-center  p-[15%] items-center transition-all duration-700  "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pt-[50%] md:mb-[5%] md:pt-[0%] text-center text-white">
        <h1 className="cursive text-7xl md:text-9xl ">Ember</h1>
        <p className="pt-[10%] md:pt-0 cursive text-3xl md:text-5xl">
          Where Culinary Artistry Meets Timeless Flavours
        </p>
      </div>
      <div></div>
      <div className="pt-[20%] md:pt-0 md:flex text-center justify-center text-white ">
        <div
          className="text-3xl md:text-6xl hover:underline py-[2%] px-[5%] "
          onMouseEnter={handleEatHover}
          onMouseLeave={() => setBgImage(home)}
        >
          Eat
        </div>
        <div
          className="text-3xl  md:text-6xl hover:underline py-[2%] px-[5%]"
          onMouseEnter={handleDrinkHover}
          onMouseLeave={() => setBgImage(home)}
        >
          Drink
        </div>
        <div
          className="text-3xl  md:text-6xl hover:underline py-[2%] px-[5%]"
          onMouseEnter={handleVisitHover}
          onMouseLeave={() => setBgImage(home)}
        >
          Visit
        </div>
      </div>
    </div>
  );
}

export default Intro;