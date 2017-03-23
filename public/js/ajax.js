  function getAllDay() {
    return $.get('/api/days')
  }

  function getOneDay(dayNum) {
    return $.get('/api/days/${dayNum}')
  }


  //for deleting one specific day
  // $.delete('/api/days')
  //   .then(function(day) {

  //   })

  //for creating one specific day]
  function createDay(dayInfo) {
    console.log("dayInfo: ", dayInfo)
    return $.post('/api/days', dayInfo)
  }

  function addHotel(hotelData) {
    return $.ajax({method: 'PUT', url: '/api/days/:dayNum/hotel', data: {hotelData}})
  }

$(document).ready(function() {
  var gettingHotels = $.get('/api/hotels')
  .then(function (hotels) {
    var hotelsArr = hotels.map(attractionModule.create)
    attractionsModule.getHotel(hotelsArr)
    var $hotelsChoices = $('#hotel-choices');
    // hotels.forEach(function(hotel){
    //   var $hotelOption = $('<option></option>').text(hotel.name).val();
    //   $hotelsChoices.append($hotelOption);
    // });
  })
  .catch( console.error.bind(console) );

  var gettingRestaurants = $.get('/api/restaurants')
    .then(function (restaurants) {
      var restaurantsArr = restaurants.map(attractionModule.create)
      attractionsModule.getRestaurant(restaurantsArr)
      var $restaurantsChoices = $('#restaurant-choices');
      // restaurants.forEach(function(restaurant){
      //   var $restaurantOption = $('<option></option>').text(restaurant.name);
      //   $restaurantsChoices.append($restaurantOption);
      // });
    })
    .catch( console.error.bind(console) );

  var gettingActivities = $.get('/api/activities')
  .then(function (activities) {
    var activitiesArr = activities.map(attractionModule.create)
    attractionsModule.getActivity(activitiesArr)
    var $activitiesChoices = $('#activity-choices');
    // activities.forEach(function(activity){
    //   var $activityOption = $('<option></option>').text(activity.name);
    //   $activitiesChoices.append($activityOption);
    // });
  })
  .catch( console.error.bind(console) );

Promise.all([gettingHotels, gettingRestaurants, gettingActivities])
  .then(function([hotels,restaurants,activities]) {
    options();
  })

})


