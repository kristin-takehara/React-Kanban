//SERVER.JS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
// const routes = require('./routes')
const db = require('./models');
const User = db.user;
const Card = db.card;

app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('public'));

//enter routes:

app.get('/', (req, res) => {
  res.send('kon-nichi-wa');
});

//GET/cards: get all cards
// app.get('/cards', (req, res) => {
//   return Card.findAll({
//     include: [
//       {model: user, as: "Creator"},
//       {model: user, as: "Dev"}
//     ]
//   })
//   .then(cards => {
//     return res.json(cards);
//   });
// });

// //GET/users: get all users
// app.get('/users', (req.res) => {
//   return User.findAll({
//     include: [
//       {model: card, as: "Cards"},
//       {model: card, as: "Tasks"}
//     ]
//   })
//   .then(users => {
//     return res.json(users);
//   });
// });

//POST/api/users: create a new user
app.post('/api/users', (req, res) => {
  let data = req.body;
  User.create(
  {
    name: data.name
  }
  )
  .then((data) => {
    res.json(data);
  }
  );
});


//POST/api/cards: create a new card
// app.post('/api/cards', (req, res) => {
//   let data = req.body;
//   Card.create(
//   {
//     title: data.title,
//     priority: data.priority,
//     status: data.status,
//     createdBy: data.user.id,
//     assignedTo: data.user.id
//   }
//   )
//   .then((data) => {
//     res.json(data);
//   }
//   );
// });

// app.use('/api', routes);

// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, 'public') });
// });


app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: ${PORT}`);
});

