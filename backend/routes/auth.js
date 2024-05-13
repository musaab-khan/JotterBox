const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//here endpoint is defined as "/" because the the index.js translate /api/auth and send to this file and this file gets endpoint '/'
router.post("/", [
    body('name',"Name is too short").isLength({ min: 3 }),
    body('email',"Enter a valid E-mail").isEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user=> res.json(user))
    .catch(error => {
            console.error(error);
            res.status(400).send("Bad Request. Enter a valid Email.");
        });
});

module.exports = router;
