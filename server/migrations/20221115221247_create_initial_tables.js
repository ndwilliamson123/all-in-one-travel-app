/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("country", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("return_reqs", 500);
      table.string("police_phone");
    })
    .createTable("language", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("country_language", (table) => {
      table.integer("country_id").unsigned().notNullable();
      table.integer("language_id").unsigned().notNullable();
      table
        .foreign("country_id")
        .references("id")
        .inTable("country");
      table
        .foreign("language_id")
        .references("id")
        .inTable("language");
    })
    .createTable("user", (table) => {
      table.string("user_id").primary();
      table.string("name");
      table.string("email").notNullable();
      table.string("password_salt").notNullable();
      table.string("password_hash").notNullable();
      table.integer("home_country_id").unsigned().notNullable();
      table
        .foreign("home_country_id")
        .references("id")
        .inTable("country")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("trip", (table) => {
      table.increments("id").primary();
      table.string("user_id").notNullable();
      table.integer("destination_country_id").unsigned().notNullable();
      table.date("date_start").notNullable();
      table.date("date_end");
      table
        .foreign("user_id")
        .references("user_id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("destination_country_id")
        .references("id")
        .inTable("country")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("phrase", (table) => {
      table.increments("id").primary();
      table.integer("original_language_id").unsigned().notNullable();
      table.string("text").notNullable();
      table
        .foreign("original_language_id")
        .references("id")
        .inTable("language")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("translation", (table) => {
      table.increments("id").primary();
      table.integer("phrase_id").unsigned().notNullable();
      table.integer("language_id").unsigned().notNullable();
      table.string("translation").notNullable();
      table
        .foreign("phrase_id")
        .references("id")
        .inTable("phrase")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("language_id")
        .references("id")
        .inTable("language")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("hotel", (table) => {
      table.integer("trip_id").unsigned().primary();
      table.string("name").notNullable();
      table.string("address").notNullable();
      table.string("phone");
      table.string("website");
      table
        .foreign("trip_id")
        .references("id")
        .inTable("trip")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("embassy", (table) => {
      table.increments("id").primary();
      table.integer("home_country_id").unsigned().notNullable();
      table.integer("destination_country_id").unsigned().notNullable();
      table.string("address").notNullable();
      table.string("phone");
      table.string("website");
      table
        .foreign("home_country_id")
        .references("id")
        .inTable("country")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("destination_country_id")
        .references("id")
        .inTable("country")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("embassy")
    .dropTable("hotel")
    .dropTable("translation")
    .dropTable("phrase")
    .dropTable("trip")
    .dropTable("user")
    .dropTable("country_language")
    .dropTable("language")
    .dropTable("country");
};
