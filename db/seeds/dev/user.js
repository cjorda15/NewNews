
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 110, name: 'chris',password:"password", created_at:knex.fn.now(), updated_at:knex.fn.now()}
      ]);
    });
};
