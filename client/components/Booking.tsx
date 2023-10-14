import { useMutation } from '@tanstack/react-query'
import { addBookings } from '../apis/booking'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-500 gap-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-[280px] sm:w-[360px] ">
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
              className="block w-full border p-2"
            />
          </label>
          <label className="block mb-2 text-left">
            Seats
            <select
              name="seats"
              value={formData.seats}
              onChange={handleInputChange}
              className="md:block w-full border p-2 appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded-md"
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
              className="block w-full border p-2 appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded-md"
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
              className="block w-full border p-2 appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded-md"
            >
              {dates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </label>
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
      <Link to="/booking-list">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          View Reservation List
        </button>
      </Link>
    </div>
  )
}
export default Booking
