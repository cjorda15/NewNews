exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user', function(table) {
      table.increments('id').primary();
      table.string('name').unique()
      table.string('password');
      table.timestamps(true);
    }),
    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.string('title')
      table.string('description')
      table.string('source')
      table.string('author')
      table.string('extra_key').unique()
      table.string('url')
      table.string('img_url')
      table.integer('user_id')
      table.boolean('beenSaved')
      table.timestamps();
    }),
    knex.schema.createTable('conservative', function(table) {
      table.increments('id').primary();
      table.string('extra_key').unique()
      table.integer('user_id')
    }),
    knex.schema.createTable('liberal', function(table) {
      table.increments('id').primary();
      table.string('extra_key').unique()
      table.integer('user_id')
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('conservative'),
    knex.schema.dropTable('liberal'),
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('user'),
  ]);
};
