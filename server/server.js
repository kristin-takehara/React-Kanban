//SERVER.JS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./models');
const User = db.user;

app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('public'));

//enter routes:

app.get('/', (req, res) => {
  res.send('testing 123');
});


//POST/
app.post('/api/users', (req, res) => {
  let data = req.body;
  User.create(
  {
    name: data.name
  })
  .then((data) => {
    res.json(data);
  });
});

// app.use('/api', routes);

// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, 'public') });
// });


app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: ${PORT}`);
});

