const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{ //here endpoint is defined as "/" because the the index.js translate /api/auth and send to this file and this file gets endpoint '/'
    // obj={
    //     name: "musaab",
    //     pass: "khan"
    // }
    // res.json(obj) //this gives simple json reply of object obj
    res.json([]);
});

module.exports = router;
