import { useEffect, useState } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Intro from './Intro'
import CarouselPage from './CarouselPage'
import Story from './Story'
import Contact from './Contact'

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-400 via-neutral-400 to-slate-800">
      <Nav />
      <Intro />
      <Story />
      <CarouselPage />
      <Contact />
    </div>
  )
}

export default App
