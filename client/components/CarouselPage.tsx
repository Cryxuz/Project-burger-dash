/* eslint-disable react/no-unescaped-entities */
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselPage = () => {
  return (
    <div
      id="menu"
      className={`pt-[5%] w-[60%] lg:flex m-auto gap-[20%] items-center`}
    >
      <div className="">
        <p className="cursive text-center m-[4%] text-5xl md:text-4xl xl:text-8xl text-white">
          Burger Paradise Awaits
        </p>
        <p className=" xl:text-2xl text-center my-5 md:my-5 text-md text-white ">
          "Life is better with a burger in hand." - Unknown
        </p>
        <div className="flex justify-center items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1IpFermZwsXtJlql0cBVK1c6esxMF1dk3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-slate-500 bg-opacity-70 hover:bg-slate-600 text-slate-50 rounded-xl p-3 ">
              View Our Full Menu
            </button>
          </a>
        </div>
      </div>
      <div className="">
        <Carousel>
          <div>
            <img className="" src="/images/burger-1.png" alt="chicken burger" />
          </div>
          <div>
            <img
              className=""
              src="/images/burger-2.png"
              alt="bacon and cheese beef burger"
            />
          </div>
          <div>
            <img
              src="/images/burger-3.png"
              alt="beef burger with onion rings"
            />
          </div>
          <div>
            <img src="/images/burger-4.png" alt="triple cheese burger" />
          </div>
          <div>
            <img src="/images/burger-5.png" alt="beef burger combo" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselPage
