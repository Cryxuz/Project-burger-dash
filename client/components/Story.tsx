


function Story() {
  return (
    <div className="xl:flex h-screen px-[10%] py-[5%] gap-[5%] bg-cover justify-center items-center pt-[15%] xl:pt-[5%]" style={{ backgroundImage: 'url("/images/ember.jpg")' }}>
      <div className="text-center items-center justify-center">
      <ul className="text-white hidden xl:block pt-[5%]">
        <h2>Lead Staff</h2>
        <br />
        <p className="pb-[5%]">Stanley & Paul</p>
        <p>-</p>
        <p className="italic text-sm">Owners</p>
        <br />
        <p className="pb-[5%]"> Auguste Escoffier</p>
        <p>-</p>
        <p  className="italic  text-sm">Executive Chef</p>
        <br />
        <p  className="pb-[5%]">Felix Sterling</p>
        <p>-</p>
        <p  className="italic text-sm">General Manager</p>
        <br />
        <p  className="pb-[5%]">Andrea Robinson</p>
        <p>-</p>
        <p  className="italic text-sm">Sommelier</p>
      </ul>
      </div>
      <img src="/images/story.jpg" alt="ai chef" className="rounded-xl w-full md:w-[50%] md:h-auto mx-auto " />
      <div className='pt-[10%] xl:pt-[0] m-[5%]'>
        
          <p className=" text-white text-center text-xl md:text-2xl xl:text-3xl ">
              In the heart of our charming town, nestled amid cobblestone streets and historic architecture, our restaurant serves as a culinary haven where timeless traditions and innovative flavors come together to create an unforgettable dining experience.
          </p>
        
      </div>
    </div>
  );
}

export default Story;

