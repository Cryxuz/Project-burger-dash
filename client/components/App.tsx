import Booking from './Booking'
import CarouselPage from './CarouselPage'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Story from './Story'
import Contact from './Contact'

function App() {
  return (
    <>
      <Nav />
      <CarouselPage />
      <Booking />
      <Story />
      <Contact />
      {/* <Outlet /> */}
    </>
  )
}

export default App
