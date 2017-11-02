// //ROUTES - USERS

// const express = require('express');
// const router = express.Router();



// //GET/api/users : respnd with all users
// router.get('/', (req, res) => {
//   return User.findAll()
//   .then(users => {
//     res.json(users);
//   })
//   .catch((err) => {
//     console.log('Users not found', err);
//   });
// });

// //GET/api/users/:id: respond with user by id
// router.get('/:id', (req, res) => {
//   const userId = req.params.id;
//   return User.findById(userId)
//   .then(user => {
//     return res.send(user);
//   })
//   .catch((err) => {
//     console.log('User not found', err);
//   });
// });



// module.exports = router;