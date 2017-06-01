
exports.seed = function(knex, Promise) {
  return knex('favorites').del()
  .then(() => knex('user').del())
    .then(() => { return Promise.all([
      knex('user').insert([
        {id: 110, name: 'chris',password:"password", created_at:knex.fn.now(), updated_at:knex.fn.now()}
      ])
  ])
});

};
