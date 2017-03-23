var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('./api/days')

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.get('/api/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(hotels => {
    res.json(hotels);
  });
});

router.get('/api/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(restaurants => {
    res.json(restaurants);
  });
});

router.get('/api/activities', function(req, res, next) {
  Activity.findAll()
  .then(activities => {
    res.json(activities);
  });
});

router.use(Day)

module.exports = router;
