import { useMutation } from '@tanstack/react-query'
import { addBookings } from '../apis/booking'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Booking() {
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

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`min-h-screen lg:grid lg:grid-cols-2 items-center justify-center bg-cover pt-[15%] lg:pt-0`}
    >
      <img
        className="mx-auto hidden lg:block"
        src="/images/bg-burger.png"
        alt=""
      />
      <div className="bg-gray-500 bg-opacity-50 p-8 rounded-lg shadow-md w-[280px] sm:w-[360px] lg:w-[80%] text-white mx-auto lg:mx-0">
        <form onSubmit={handleSubmit} method="post" className="text-center">
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
          <button className="bg-gray-700 text-white p-2 rounded-lg hover-bg-slate-400 m-[3%] border-[2px]">
            Submit
          </button>
        </form>
        <div className="text-center">
          <Link to="/booking-list">
            <button className="bg-gray-700 m-5 text-white py-2 px-4 rounded-lg hover-bg-slate-400 border-[2px]">
              View Reservation List
            </button>
          </Link>
          <p className="text-white text-center px-2 lg:text-lg">
            Unfortunately, the reservation list is not available because Netlify
            does not provide free database hosting.
          </p>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 left-0 pb-2 px-10">
        <Footer />
      </div>
    </div>
  )
}

export default Booking
