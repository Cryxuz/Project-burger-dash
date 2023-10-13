/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('bookings', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('seats')
    table.time('time')
    table.date('date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('todo')
}
