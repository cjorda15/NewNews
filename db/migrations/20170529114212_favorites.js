
exports.up = function(knex, Promise) {
    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.string('title')
      table.string('description')
      table.string('source')
      table.string('url')
      table.string('img-url')
      table.integer('user_id').unsigned()
      table.foreign('user_id')
       .references('user.id');
      table.timestamps();
    })
}

exports.down = function(knex, Promise) {
  knex.schema.dropTable('favorites')
}
