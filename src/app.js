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
const knex = "knex"
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

app.use("/bundle.js",express.static(path.join(__dirname, '../bundle.js')));

app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../app')));



app.get('/api/v1/news', (request, response) => {
  database('news').select()
    .then(news => {
      response.status(200).json(news);
    })
    .catch(error => {
      console.error('error: ', error)
    });
});

app.get('/api/v1/user', (request, response) => {
  database('user').select()
    .then(news => {
      response.status(200).json(news);
    })
    .catch(error => {
      console.error('error: ', error)
    });
});

app.get('/api/v1/favorites', (request, response) => {
  database('favorites').select()
    .then(favorites => {
      response.status(200).json(favorites);
    })
    .catch(error => {
      console.error('error: ', error)
    });
});

app.post('/api/v1/favorites',
 (request,response) => {
   const favorite = request.body
   database('favorites').insert(favorite,'description')
   .then(favorite => { response.send(favorite) })
   .catch(err => response.send(err))
 })

 app.post('/api/v1/favorites/favs', (request,response) => {
   database('favorites').where({
      user_id:request.body.id})
      .then(user => response.send(user))
      .catch(err => console.log(err,"error-message"))
 })

 app.delete('/api/v1/favorites/delete', (request,response) => {
   database('favorites').where({
      extra_key:request.body.key
   }).del()
      .then(user => response.status(200).json({user}))
      .catch(err => console.log(err,"error-messag"))
 })

app.post('/api/v1/user/users', (request, response) => {
  database('user').where({
                  name: request.body.name,
                  password: request.body.password
                })
    .select('id').select('name')
    .then(user => response.status(200).json({user}))
    .catch(error => {
    console.error('error: ', error)
  });
});


app.get('/api/v1/news/:source', (request, response) => {
  database('news').where('source', request.params.source).select()
    .then(news => {response.status(200).json(news)})
    .catch(error => {console.error('error: ', error)});
});

app.put('/api/v1/news',(req,res) => {
  database('news').where('id', req.body.id).select()
   .update({
    'updated_at': req.body.date,
    [req.body.type]: database.raw(`${req.body.type} + 1`)})
   .then(news => {
    res.status(200).json(news)})
   .catch(error => {
    console.log('error', error)
  })
})

app.post('/api/v1/user', (request, response, next) => {
  const user = request.body;
  database('user').insert(user,'id')
   .then(user => response.send(user))
   .catch(error => {console.log(error)
    next(error)})
})

app.get('/api/v1/getvote', (request, response) => {
  database('votes').select()
    .then(list => {response.status(200).json(list)})
    .catch(error => {console.error('error: ', error)})
})

app.post('/api/v1/addvote', (request, response) => {
  const vote = request.body;
  database('votes').insert(vote,'id')
   .then(user => {response.json(vote)})
   .catch(error => {console.log(error); response.send(error)})
})

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });


app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
