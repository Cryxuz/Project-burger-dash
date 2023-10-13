import connection from './connection.ts'
const db = connection
export async function addBookings(booking) {
  return db('bookings')
    .insert({ ...booking })
    .returning('*')
    .then((addedBookings) => {
      return addedBookings[0]
    })
}
