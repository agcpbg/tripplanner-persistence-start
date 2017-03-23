var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day')

//get all days
router.get('/api/days', function(req, res, next) {
    Day.findAll()
        .then(days => {
            res.json(days);
        })
});

//get one specific day
router.get('/api/days/:dayNum', function(req, res, next) {
    var dayNum = req.params.dayNum
    Day.findOne({
        where: {
            number: dayNum
        }
    })
        .then(day => {
            res.json(day)
        })
});

//delete one specific day
router.delete('/api/days/:dayNum', function(req, res, next) {
    var dayNum = req.params.dayNum
    Day.destroy({
        where: {
            number: dayNum
        }
    })
})

router.delete('/api/days/:dayNum/hotel', function(req, res, next) {
    var dayNum = req.params.dayNum
    var hotelId = req.body.hotel.id
    Day.destroy({
        where: {
            number: dayNum,
            hotelid: hotelId
        }
    })
})

//create new day?
router.post('/api/days', function(req, res, next) {
    Day.create(req.body)
    .then(function(newDay) {
        res.send(newDay)
    })
})

module.exports = router;
