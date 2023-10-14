import Nav from './Nav'
import Intro from './Intro'
import Story from './Story'
import CarouselPage from './CarouselPage'
import Contact from './Contact'
import { Outlet } from 'react-router-dom'
// import Booking from "./Booking"

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
