// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
  development: {
    client: 'postgresql',
    connection: {
      user : 'postgres',
      password : 'Postgres@143',
      database : 'demoProjectDb'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
