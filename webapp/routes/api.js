var express = require('express');
var router = express.Router();
var request = require('request');
var Temps = require('../models/temps');


router.put('/temp', function (req, res) {
    temperature = req.body.temperature;

    temp = new Temps({temperature: req.body.temperature});

    temp.save();

    res.sendStatus(200);

});


router.get('/temp', function (req, res) {

    Temps.find(function (err, results) {
        if (err) {
            throw err;
        }
        // console.log(results);
        res.json(results);
    });


});

module.exports = router;