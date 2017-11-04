//SERVER.JS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const db = require('./models');
const User = db.user;
const Card = db.card;
const Status = db.status;
const Priority = db.priority;

app.use(bodyParser.json());
// app.use(express.static('public'));

//enter routes:
//testing GET to browser
app.get('/', (req, res) => {
  res.send('kon-nichi-wa');
});

//GET/api/users: get all users
app.get('/api/users', (req,res) => {
  return User.findAll({
    include: [
      {model: Card, as: "Cards"},
      {model: Card, as: "Tasks"}
    ]
  })
  .then(users => {
    return res.json(users);
  });
});

//POST/api/users: create a new user
app.post('/api/users', (req, res) => {
  let name = req.body.name;

  User.create({name: name})
  .then((newUser) => {
    res.json(newUser);
  }
  );
});

// GET/api/cards: get all cards
app.get('/api/cards', (req, res) => {
  return Card.findAll({
    include: [
      {model: user, as: "Creator"},
      {model: user, as: "Dev"}
    ]
  })
  .then(cards => {
    return res.json(cards);
  });
});

//POST/api/cards: create a new card
app.post('/api/cards', (req, res) => {
  let title = req.body.title;
  let priority = req.body.priority;
  let status = 1;
  let assignedTo = req.body.assignedTo

  Card.create(
  {
    title: title,
    priority: priority,
    status: status,
    assignedTo: assignedTo
  })
  .then((newCard) => {
    res.json(newCard);
  });
});

//GET/api/card/:id get card by id
app.get('/api/card/:id', (req, res) => {
  let cardId = req.params.id;

  return Card.findById(cardId)
  .then(card => {
    return res.json(card);
  });
});

// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, 'public') });
// });

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: ${PORT}`);
});

