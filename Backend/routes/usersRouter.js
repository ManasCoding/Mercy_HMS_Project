// const express = require('express');
import express from "express";
const router = express.Router();
// import Router from "express";
// const { signup , login, logout} = require('../controllers/authController');
import { signup } from "../controllers/authController.js";


router.get('/login', (req, res) => {
    res.send('users world');
})

router.post("/signup", signup);
// router.get("/signup", (req, res) => {
//     res.send('signup page');
// });

// router.get("/login", (req, res) => {
//     res.send('login page');
// })

// router.post("/logout", logout)

export default router