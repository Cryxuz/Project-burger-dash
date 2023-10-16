import { useMutation } from '@tanstack/react-query'
import { addBookings } from '../apis/booking'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { motion } from 'framer-motion'

function Booking() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const seats = []
  for (let i = 2; i <= 10; i++) {
    seats.push(i)
  }

  const time = [
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
  ]

  const currentDate = new Date()
  const dates = []

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(currentDate)
    nextDate.setDate(currentDate.getDate() + i)
    dates.push(nextDate.toDateString())
  }

  const mutation = useMutation((formData) => addBookings(formData))

  const [formData, setFormData] = useState({
    name: '',
    seats: seats[0],
    time: time[0],
    date: dates[0],
  })

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-cover gap-5"
      style={{ backgroundImage: 'url("/images/reserved.webp")' }}
    >
      <div className="bg-gray-500 bg-opacity-50 p-8 rounded-lg shadow-md w-[280px] sm:w-[360px] lg:w-[30%] text-white">
        <form onSubmit={handleSubmit} method="post" className="text-center">
          {' '}
          <label className="block mb-2 text-left">
            Name
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full border p-2 bg-gray-500 bg-opacity-50 rounded-md"
            />
          </label>
          <label className="block mb-2 text-left">
            Seats
            <select
              name="seats"
              value={formData.seats}
              onChange={handleInputChange}
              className="bg-gray-500 bg-opacity-50 md:block w-full border p-2 appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded-md"
            >
              {seats.map((seat, index) => (
                <option key={index} value={seat}>
                  {seat}
                </option>
              ))}
            </select>
          </label>
          <label className="block mb-2 text-left">
            Time
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className=" bg-gray-500 bg-opacity-50 block w-full border p-2 appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded-md"
            >
              {time.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
          <label className="block mb-2 text-left">
            Date
            <select
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className=" bg-gray-500 bg-opacity-50 block w-full border p-2 appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded-md"
            >
              {dates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </label>
          <button className="bg-gray-700 text-white p-2 rounded-lg hover:bg-slate-400 m-[3%] border-[2px]">
            Submit
          </button>
        </form>
      </div>
      <Link to="/booking-list">
        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-slate-400 border-[2px]">
          View Reservation List
        </button>
      </Link>
      <p className="text-white text-center px-2 lg:text-lg">
        Unfortunately, reservation list is not available because Netlify does
        not provide free database hosting.
      </p>
      <div className="flex items-end justify-end fixed bottom-0 right-0 left-0 pb-2 px-10">
        <Footer />
      </div>
    </motion.div>
  )
}
export default Booking
