import connection from './connection.ts'
import { Fruit } from '../../models/something.ts'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('something').select()
}
