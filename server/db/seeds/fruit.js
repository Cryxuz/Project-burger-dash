export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('something').del()

  // Inserts seed entries
  await knex('something').insert([
    { id: 1, name: 'thing' },
    { id: 2, name: 'thing' },
    { id: 3, name: 'thing' },
  ])
}
