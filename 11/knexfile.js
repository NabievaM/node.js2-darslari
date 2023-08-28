// Update with your config settings.

const config = require("./config");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgres",
    connection: {
      connectionString: config.dbUrl,
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      connectionString: config.dbUrl,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: config.dbUrl,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
