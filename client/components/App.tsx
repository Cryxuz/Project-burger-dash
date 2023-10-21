import { useEffect, useState } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Intro from './Intro'
import CarouselPage from './CarouselPage'
import Story from './Story'
import Contact from './Contact'

function App() {
  return (
    <>
      <Nav />
      <Intro />
      <Story />
      <CarouselPage />
      <Contact />
    </>
  )
}

export default App
