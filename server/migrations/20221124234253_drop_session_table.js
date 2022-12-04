/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  //app.js will create the "session" table if it does not exist
  //this migration is just for dropping the "session" table if needed for testing, see exports.down
  return Promise.resolve(true)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("session")
};
