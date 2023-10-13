import { Router } from 'express'

import * as db from '../db/something.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const something = await db.getAllThings()

    res.json({ something: something.map((something) => something.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
