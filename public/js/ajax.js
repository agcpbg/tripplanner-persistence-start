$(document).ready(function() {



  $.get('/api/hotels')
  .then(function (hotels) {
    var $hotelsChoices = $('#hotel-choices');
    hotels.forEach(function(hotel){
      var $hotelOption = $('<option></option>').text(hotel.name);
      $hotelsChoices.append($hotelOption);
    });
  })
  .catch( console.error.bind(console) );

  $.get('/api/restaurants')
    .then(function (restaurants) {
      var $restaurantsChoices = $('#restaurant-choices');
      restaurants.forEach(function(restaurant){
        var $restaurantOption = $('<option></option>').text(restaurant.name);
        $restaurantsChoices.append($restaurantOption);
      });
    })
    .catch( console.error.bind(console) );

  $.get('/api/activities')
  .then(function (activities) {
    var $activitiesChoices = $('#activity-choices');
    activities.forEach(function(activity){
      var $activityOption = $('<option></option>').text(activity.name);
      $activitiesChoices.append($activityOption);
    });
  })
  .catch( console.error.bind(console) );


})


