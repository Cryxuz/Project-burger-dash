function Story() {
  return (
    <div
      id="story"
      className={`lg:flex px-[10%] gap-[5%]  pt-[15%] xl:pt-[5%]`}
    >
      <img
        className="md:w-[50%] md:h-[60%] md:mx-auto hidden lg:block"
        src="/images/story.png"
        alt=""
      />
      <div className="pt-[10%] xl:pt-[0] m-[5%]">
        <p className="text-center text-xl md:text-2xl lg:text-sm xl:text-3xl text-white leading-relaxed">
          In 1957, nestled in the heart of Queenstown, a small burger place was
          born. It was named "Burger Dash," and it quickly became a local
          legend. With its secret family recipe, the juiciest patties, and a
          timeless charm, Burger Dash served generations of happy customers.
          Today, it stands as a cherished part of Queenstown's history, where
          every bite is a bite of nostalgia and delicious tradition. Today, as
          Burger Dash continues to delight locals and tourists alike, it remains
          a symbol of Queenstown's enduring spirit and a testament to the
          timeless appeal of a perfectly crafted burger.
        </p>
      </div>
      <img
        className="md:w-[50%] md:mx-auto lg:hidden pt-10"
        src="/images/story.png"
        alt=""
      />
    </div>
  )
}

export default Story
