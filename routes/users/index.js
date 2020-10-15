//user Router
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get((req, res, next) => {
    res.send('This is user home page ' + req.method);
  })
  .put((req, res, next) => {
    res.send('This is user home page ' + req.method);
  })
  .post((req, res, next) => {
    res.send('This is user home page ' + req.method);
  })
  .delete((req, res, next) => {
    res.send('This is user home page ' + req.method);
  });

// router.get('/', (req, res, next) => {
//   res.send('This is user home page ' + req.method);
// });
// router.post('/', (req, res, next) => {
//   res.send('This is user home page ' + req.method);
// });
// router.put('/', (req, res, next) => {
//   res.send('This is user home page ' + req.method);
// });
// router.delete('/', (req, res, next) => {
//   res.send('This is user home page ' + req.method);
// });
router.get('/dashboard', (req, res, next) => {
  res.send('This is user dashboard ' + req.method);
});
router.post('/login', (req, res, next) => {
  res.send('This is user login page ' + req.method);
});
module.exports = router;
