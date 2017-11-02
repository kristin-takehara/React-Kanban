//SERVER.JS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const db = require('./models');


app.use(bodyparser.urlencoded({extended: true }));
app.use(express.static('public'));

//enter routes:

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});


app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: ${PORT}`);
});

