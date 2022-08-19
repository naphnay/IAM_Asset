/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.schema.createTable('Assets', table=>{
        
        table.increments('assetId');
        table.string('plant').notNullable();
        table.string('processArea').notNullable();
        table.string('asset').notNullable().primary().unique();
        table.string('rcaId').notNullable();
        // table.timestamps(true,true);  
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable('Assets');

};
