import { Router } from 'express'
import { addBookings } from '../db/db.ts'
import * as db from '../db/db.ts'

const router = Router()

router.get('/', (req, res) => {
  db.getBookingList()
    .then((booking) => {
      res.json(booking)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})
router.post('/', async (req, res) => {
  const booking = req.body
  const addedBooking = await addBookings(booking)
  console.log('routes hit')
  res.json(addedBooking)
})

export default router
