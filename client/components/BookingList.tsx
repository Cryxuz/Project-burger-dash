import { useQuery } from '@tanstack/react-query'
import { getBookingList } from '../apis/booking'

function BookingList() {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery(['bookings'], getBookingList)

  if (error) {
    return <p>Something went wrong.</p>
  }
  if (isLoading || !bookings) {
    return <p>Loading... Please wait.</p>
  }
  return (
    <div>
      {bookings.map((el) => {
        return (
          <ul key={el.id}>
            <li>Date: {el.date}</li>
            <li>Name: {el.name}</li>
            <li>Seats: {el.seats}</li>
            <li>Time: {el.time}</li>
          </ul>
        )
      })}
    </div>
  )
}
export default BookingList
