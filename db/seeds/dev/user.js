
exports.seed = function(knex, Promise) {
  return knex('favorites').del()
  .then(() => knex('user').del())
    .then(() => { return Promise.all([
      knex('user').insert([
        {id: 110, name: 'chris',password:"password", created_at:knex.fn.now(), updated_at:knex.fn.now()}
      ]).then(user =>{
        return knex('favorites').insert([
          {title: 'killakid',description:"bllah",source:"ABC",url:"asdfasdf",img_url:"asdfasdf",user_id:110,created_at:knex.fn.now(), updated_at:knex.fn.now()}
      ])
    })
  ])
});

};

//   .then(() =>
//
// //
// .then(user => {
//   return knex('favorites').insert([
//     {id: 1, title: 'killakid',description:"bllah",source:"ABC",url:"asdfasdf",img_url:"asdfasdf",user_id:1,
//     }
//
//   ])
// })
