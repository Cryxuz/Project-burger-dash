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

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <form>
          <label className="block mb-2">
            Name
            <input type="text" className="block w-full border p-2" />
          </label>
          <label className="block mb-2">
            Seats
            <select className="block w-full border p-2">
              {seats.map((seat, index) => (
                <option key={index} value={seat}>
                  {seat}
                </option>
              ))}
            </select>
          </label>
          <label className="block mb-2">
            Time
            <select className="block w-full border p-2">
              {time.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
          <label className="block mb-2">
            Date
            <select className="block w-full border p-2">
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
    </div>
  )
}

export default Booking
