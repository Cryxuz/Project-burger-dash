import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselPage = () => {
  return (
    
    <div className="h-screen block md:grid grid-cols-5 gap-[5%] justify-center items-center p-[5%] bg-cover bg-opacity-30" style={{ backgroundImage: 'url("/images/grill.jpg")' }}>
      
      <div className="col-span-3">
        <Carousel>
          <div>
            <img src="/images/carousel-img-1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="/images/carousel-img-3.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="/images/carousel-img-4.jpg" alt="Image 3" />
          </div>
          <div>
            <img src="/images/carousel-img-5.jpg" alt="Image 4" />
          </div>
        </Carousel>
      </div>
      <div className="col-span-2 p-4 flex flex-col justify-between items-center bg-gray-500 bg-opacity-40 rounded-lg">
        <p className="cursive text-center m-[4%] text-5xl md:text-4xl xl:text-8xl text-white">Explore Our Delicious cursive</p>
        <p className=' xl:text-2xl text-center my-5 md:my-5 text-md text-white '>"Laughter is brightest in the place where the food is." – Irish Proverb</p>
        <div className="flex justify-center items-center gap-2">
         <a href="https://drive.google.com/file/d/1udEgTBX8DTwrRAVZO0WDeOr6B3maqEp6/view?usp=sharing" target='_blank'> 
          <button className="bg-slate-500 bg-opacity-70 hover:bg-slate-400 text-slate-50 rounded-xl p-3 ">
              View Our Full Menu
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1-VB9VcbXRPX_TgRzHnNU3xdw8VeNjOd4/view?usp=sharing" target='_blank'>
            <button className="bg-slate-500 bg-opacity-70 hover:bg-slate-400 text-slate-50 rounded-xl p-3 ">
              View Our Drinks
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage