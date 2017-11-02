//SERVER.JS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
//const db


app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('public'));


app.listen(PORT, () => {
  // db.sequelize.sync({ force: true });
  console.log(`Server listening on port: ${PORT}`);
});

