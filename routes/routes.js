const express=require('express');
const route=express.Router();

const {login,dashboard}=require('../controller/controller')

route.route('/login').get(login);
route.route('/dashboard').get(dashboard);

module.exports=route;