exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('news', function(table) {
      table.increments('id').primary();
      table.string('source');
      table.integer('conservative');
      table.integer('liberal');

      table.timestamps(true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('news'),
  ]);
};
