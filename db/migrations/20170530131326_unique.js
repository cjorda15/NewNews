
exports.up = function(knex, Promise) {
  knex.schema.alterTable('users', function(table) {
    table.unique('name')

};

exports.down = function(knex, Promise) {
  knex.schema.('users',function(table){
    table.string('name')
  })
};
