
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('news').del()
    .then(function () {

      return knex('news').insert([
        {id: 1, source: 'abc-news-au',conservative:0,liberal:10, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 2, source: 'al-jazeera-english',conservative:4,liberal:13, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 3, source: 'associated-press',conservative:10,liberal:3, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 4, source: 'bbc-news',conservative:10,liberal:30, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 5, source: 'bloomberg',conservative:10,liberal:3, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 6, source: 'breitbart-news',conservative:100,liberal:33, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 7, source: 'business-insider',conservative:21,liberal:20, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 8, source: 'buzzfeed',conservative:90,liberal:213, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 9, source: 'cnbc',conservative:10,liberal:300, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 10, source: 'cnn',conservative:10,liberal:200, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 11, source: 'daily-mail',conservative:101,liberal:3, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 12, source: 'entertainment-weekly',conservative:1,liberal:33, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 13, source: 'financial-times',conservative:10,liberal:3, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 14, source: 'fortune',conservative:100,liberal:3, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 15, source: 'google-news',conservative:15,liberal:23, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 16, source: 'hacker-news',conservative:10,liberal:30, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 17, source: 'independent',conservative:10,liberal:33, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 18, source: 'metro',conservative:103,liberal:3, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 19, source: 'mirror',conservative:102,liberal:3, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 20, source: 'mtv-news',conservative:1,liberal:13, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 21, source: 'mtv-news-uk',conservative:23,liberal:39, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 22, source: 'national-geographic',conservative:10,liberal:5, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 23, source: 'newsweek',conservative:1,liberal:13, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 24, source: 'new-york-magazine',conservative:10,liberal:93, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 25, source: 'reddit-r-all',conservative:13,liberal:63, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 26, source: 'the-economist',conservative:99,liberal:21, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 27, source: 'the-guardian-uk',conservative:102,liberal:55, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 28, source: 'the-huffington-post',conservative:1,liberal:93, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 29, source: 'the-new-york-times',conservative:12,liberal:99, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 30, source: 'the-telegraph',conservative:102,liberal:63, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 31, source: 'the-times-of-india',conservative:101,liberal:34, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 32, source: 'the-wall-street-journal',conservative:10,liberal:77, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 33, source: 'the-washington-post',conservative:1,liberal:88, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 34, source: 'time',conservative:43,liberal:31, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {id: 35, source: 'usa-today',conservative:10,liberal:23, created_at:knex.fn.now(), updated_at:knex.fn.now()}

      ]);
    });



exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('news'),
  ]);
};


}
