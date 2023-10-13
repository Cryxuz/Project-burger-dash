/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('bookings').del()
  await knex('bookings').insert([
    { id: 1, name: '', time: '', date: '', seats: '' },
  ])
}
