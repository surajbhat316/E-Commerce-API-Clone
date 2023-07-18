const express = require('express');

const router = express.Router();



router.get('/', function (req, res) {
    // return res.status(200).json({
    //     message : "Home Page"
    // })
    return res.render('home');
});


router.use('/api' ,require('./api'));


module.exports = router;