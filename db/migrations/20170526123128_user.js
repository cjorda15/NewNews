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
      table.integer('user_id').unsigned()
      table.foreign('user_id')
       .references('user.id');
      table.timestamps();
    })
  ])
};



exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('user'),
  ]);
};
