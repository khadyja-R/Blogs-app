const express  = require('express');
const getAllUser = require('../controllers/user-controllers/getAllusers');
const Login = require('../controllers/user-controllers/login');
const SingUp = require('../controllers/user-controllers/Singup');

const router = express.Router();

router.get("/", getAllUser);

router.post("/singup",  SingUp);

router.post("/login", Login)

module.exports = router;