
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('news').del()
    .then(function () {
      // Inserts seed entries
      return knex('news').insert([
        {id: 1, source: 'abc-news-au',conservative:0,liberal:10},
        {id: 2, source: 'nbc',conservative:4,liberal:13},
        {id: 3, source: 'fox',conservative:10,liberal:3}
      ]);
    });



exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('news'),
  ]);
};


}
