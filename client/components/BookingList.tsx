import { useQuery } from '@tanstack/react-query'
import { getBookingList } from '../apis/booking'

function BookingList() {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery(['bookings'], getBookingList)

  if (error) {
    return <p className="text-red-500">Something went wrong.</p>
  }
  if (isLoading || !bookings) {
    return <p className="text-white">Loading... Please wait.</p>
  }

  const currentDate = new Date()
  const nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 7)

  const upcomingBookings = bookings.filter((booking) => {
    const bookingDate = new Date(booking.date)
    return bookingDate >= currentDate && bookingDate <= nextWeek
  })

  if (upcomingBookings.length === 0) {
    return (
      <div className="pt-20 text-center">
        <h1 className="text-2xl text-white">
          NO RESERVATIONS BOOKED FOR THE NEXT 7 DAYS
        </h1>
      </div>
    )
  }

  return (
    <div
      className="overflow-x-auto pt-20 bg-cover h-screen text-white"
      style={{ backgroundImage: 'url("/images/reserved.jpg")' }}
    >
      <h2 className="text-white text-center text-lg md:text-2xl lg:text-4xl p-4 cursive">
        Reservation List For The Next 7 Days
      </h2>
      <table className="w-[80%] table-fixed mx-auto bg-transparent bg-opacity-50">
        <thead className="">
          <tr className=" md:text-xl">
            <th className="w-1/4 p-2">Date</th>
            <th className="w-1/4 p-2">Name</th>
            <th className="w-1/4 p-2">Seats</th>
            <th className="w-1/4 p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {upcomingBookings.map((el) => (
            <tr
              key={el.id}
              className="border-b border-gray-300 md:text-xl xl:text-2xl"
            >
              <td className="p-2 text-center">{el.date}</td>
              <td className="p-2 text-center">{el.name}</td>
              <td className="p-2 text-center">{el.seats}</td>
              <td className="p-2 text-center">{el.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookingList
