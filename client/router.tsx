import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import Intro from './components/Intro'
import Story from './components/Story'
import Contact from './components/Contact'
import CarouselPage from './components/CarouselPage'
import Booking from './components/Booking'
import BookingList from './components/BookingList'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* <Route index element={<Intro />} />
    <Route path="/menu" element={<CarouselPage />} />
    <Route path="/bookings" element={<Booking />} />
    <Route path="/story" element={<Story />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/booking-list" element={<BookingList />} /> */}
  </Route>,
)

export const router = createBrowserRouter(routes)
