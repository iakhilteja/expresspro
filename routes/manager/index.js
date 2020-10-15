//Manager Router
const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
  res.send('This is Manager home page ' + req.method);
});
router.post('/', (req, res, next) => {
  res.send('This is Manager home page ' + req.method);
});
router.put('/', (req, res, next) => {
  res.send('This is Manager home page ' + req.method);
});
router.delete('/', (req, res, next) => {
  res.send('This is Manager home page ' + req.method);
});
router.get('/dashboard', (req, res, next) => {
    res.send('This is Manager dashboard ' + req.method);
  });
  router.post('/login', (req, res, next) => {
    res.send('This is Manager login page ' + req.method);
  });
module.exports = router;
