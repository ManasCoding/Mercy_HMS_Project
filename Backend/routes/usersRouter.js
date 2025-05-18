// const express = require('express');
import express from "express";
const router = express.Router();
// import Router from "express";
// const { signup , login, logout} = require('../controllers/authController');

router.get('/', (req, res) => {
    res.send('users world');
})

// router.post("/signup", signup);

// router.post("/login", (req, res) => {
//     res.send('login page');
// })

// router.post("/logout", logout)

export default router