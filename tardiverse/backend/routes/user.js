const express = require('express');
const { getAllUsers,  register, login, getLoggedInUser, loginViaGoogle } = require('../handlers/user');
const auth = require('./middlewares/auth');

const userRouter = express.Router()

userRouter.get('/users', getAllUsers);
userRouter.post('/users', register);
userRouter.post('/users/login', login);
userRouter.post('/users/loginviagoogle', loginViaGoogle);
userRouter.get('/users/getLoggedIn', auth, getLoggedInUser);


module.exports = userRouter;