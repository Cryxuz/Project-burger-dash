function Story() {
  return (
    <div
      id="about"
      className={`lg:flex px-[10%] gap-[5%]  pt-[15%] xl:pt-[5%] items-center justify-center`}
    >
      <img
        className="md:w-[50%] md:h-[60%] md:mx-auto hidden lg:block"
        src="/images/story.png"
        alt=""
      />
      <div className="pt-[10%] xl:pt-[0] m-[5%]">
        <p className="text-center text-xl md:text-2xl lg:text-sm xl:text-3xl text-white leading-relaxed sans-serif">
          In 1957, nestled in the heart of Queenstown, a small burger place was
          born. It was named &quot;Burger Dash,&quot; and it quickly became a
          local legend. With its secret family recipe, the juiciest patties, and
          a timeless charm, Burger Dash served generations of happy customers.
          Today, it stands as a cherished part of Queenstown&apos;s history,
          where every bite is a bite of nostalgia and delicious tradition.
          Today, Burger Dash continues to delight locals and tourists alike.
        </p>
      </div>
      <img
        className="md:w-[50%] md:mx-auto lg:hidden pt-10"
        src="/images/story.png"
        alt="burger sketch"
      />
    </div>
  )
}

export default Story
