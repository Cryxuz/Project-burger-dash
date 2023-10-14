import { Router } from 'express'
import { addBookings } from '../db/db.ts'

const router = Router()

router.post('/', async (req, res) => {
  const booking = req.body
  const addedBooking = await addBookings(booking)
  console.log('routes hit')
  res.json(addedBooking)
})

export default router
