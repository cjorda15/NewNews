exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user', function(table) {
      table.increments('id').primary();
      table.string('name').unique()
      table.string('password');
      table.timestamps(true);
    })
  ])
};



exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user'),
  ]);
};
