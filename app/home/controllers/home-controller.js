(function() {
    'use strict';

    var app = angular
        .module('foodtruckers');

    app.controller('homeController', homeController);

    homeController.$inject =['homeFactory'];

    function homeController(homeFactory) {
        var home = this;

        home.foodtrucks = null;
        home.comments = null;
        home.callCommentsModal = callCommentsModal;

        homeFactory.getFoodtrucks()
            .success(success);

        function callCommentsModal(id){
            homeFactory.getComments(id).success(commentsSuccess);

            function commentsSuccess(jsonData, statusCode) {
                home.comments = jsonData;
                console.log(home.comments);
            }
        }

        function success(jsonData, statusCode) {
            console.log('The request was successful', statusCode);
            console.dir(jsonData);
            home.foodtrucks = jsonData;


            function initialize() {
                var mapCanvas = document.getElementById('map');
                var mapOptions = {
                    center: new google.maps.LatLng(19.4333, -99.1333),
                    zoom: 12,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                var map = new google.maps.Map(mapCanvas, mapOptions)

                home.foodtrucks.forEach(function(foodtruck) {
                    console.log(foodtruck);

                    var contentString = '<div class="infowindow">'+
                        '<div class="title"><h2>'+foodtruck.name+'</h2></div>'+
                        '<div>'+
                        '<div class="type"><p><span class="attribute">Tipo: </span>'+foodtruck.food_type+'</p></div>'+
                        '<div class="price"><p><span class="attribute">Precio: </span>'+foodtruck.price+'</p></div>'+
                        '<div class="rating"><p><span class="attribute">Rating: </span>'+foodtruck.rating+'</p></div>'+
                        '<div class="col-lg-6 facebook"><p><span class="attribute"><a href="'+foodtruck.facebook+'">Facebook</a></span></p></div>'+
                        '<div class="col-lg-6 twitter"><p><span class="attribute"><a href="'+foodtruck.twitter+'">Twitter</a></span></p></div>'+
                        '</div>'+
                        '</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(foodtruck.location_object.lat, foodtruck.location_object.long),
                        animation: google.maps.Animation.DROP,
                        map: map,
                        title: foodtruck.name
                    });

                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });
                });
            }
            google.maps.event.addDomListener(window, 'load', initialize);

        }
    }
})();