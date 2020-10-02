const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const checkRole = require('../auth/check-role-middleware')

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.delete('/:id', restricted, (req, res) => {
  res.status(501).json({ message: 'not implemented' })
})

router.post('/', restricted, checkRole(1), (req, res) => {
  res.status(501).json({ message: 'not implemented' })
})

router.put('/:id', restricted, (req, res) => {
  res.status(501).json({ message: 'not implemented' })
})

module.exports = router;
