import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import Booking from './components/Booking'
import BookingList from './components/BookingList'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/bookings" element={<Booking />} />
    <Route path="/booking-list" element={<BookingList />} />
  </>,
)

export const router = createBrowserRouter(routes)
