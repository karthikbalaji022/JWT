const express=require('express');
const route=express.Router();

const {login,dashboard}=require('../controller/controller')
const authentication=require('../middleware/authentication')
route.route('/login').post(login);
route.route('/dashboard').get(authentication,dashboard);

module.exports=route;