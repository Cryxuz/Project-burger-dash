import request from 'superagent'

const rootUrl = '/api/v1'

export async function getBookingList() {
  const dbList = await request.get(`${rootUrl}/bookings`)
  return dbList.body
}
export async function addBookings(booking) {
  console.log('api hit')
  const addedBooking = await request.post(`${rootUrl}/bookings`).send(booking)
  return addedBooking.body
}
