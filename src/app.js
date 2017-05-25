// const Server = require('./server');
const path = require('path');
const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser')
const port = (process.env.PORT || 3000);
const app = express();
const router = require('./router');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}


app.use('/assets', express.static(path.join(__dirname, '../app/assets')));

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });

// app.use('/api', router);
// app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });

app.listen(port);

console.log(`Listening at http://localhost:${port}`);


app.get('/api/v1/news', (request, response) => {
  database('news').select()
    .then(news => {
      response.status(200).json(news);
    })
    .catch(error => {
      console.error('error: ', error)
    });
});

app.get('/api/v1/news/:source', (request, response) => {
  database('news').where('source', request.params.source).select()
    .then(news => {
      response.status(200).json(news);
    })
    .catch(error => {
      console.error('error: ', error);
    });
});

app.put('/api/v1/news',(req,res) => {
      console.log(req.body);
      database('news').where('source', req.body.source).select()
      .update({
        'updated_at': req.body.date,
        [req.body.type]: database.raw(`${req.body.type} + 1`)
      })
      .then(news => {
        res.status(200).json(news)
      })
    })


//


 // fetch(`http://localhost:3000/api/v1/news/:source`, {
 //    method: "PUT",
 //    headers: {"Content-Type": "application/json"},
 //    body: JSON.stringify({
 //          source: source,
 //          conservative: 10000,
 //          liberal:999999
 //        })
 //  })
 //  .then(response => response.json())
 //  .then( res => {
 //    console.log(res)
 //  })

  // app.put('/api/v1/news/:source', (request, responce) =>{
  //   database('news').where('source', request.params.source).select()
  //   .update({
  //     'updated_at': new Date(),
  //     'conservative': knex.raw('conservative + 1')
  //   });
  //
  // })
  //
  // knex('Attributes').update({
  //   ListID: knex('List').select('ID').where('OriginID', knex.raw('??', ['Attributes.OriginList']))
  // })

  // database('news').update({
  //   LISTID: knex('news').select('source').where('source',
  // knex.raw(++))
  // })
  //
  //
  // }

  //   knex('Attributes').update({
  // ListID: knex('List').select('ID').where('OriginID', knex.raw('??', ['Attributes.OriginList']))



// app.post('/api/v1/news', (request, response) => {
//   const news = {source: 'msnbc', conservative: 5, liberal: 2}
//
//
//   database('news').insert(news)
//     .then(news => {
//       console.log(news)
//     })
//     .catch(error => {
//       console.error('error: ', error);
//     });
// });
