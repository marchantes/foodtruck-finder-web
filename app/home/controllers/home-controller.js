(function() {
    'use strict';

    var app = angular
        .module('foodtruckers');

    app.controller('homeController', homeController);

    homeController.$inject =[homeFactory];

    function homeController(homeFactory) {
        var home = this;
        homeFactory.getFoodtrucks()
            .success(success);

        function success(jsonData, statusCode) {
            console.log('The request was successful', statusCode);
            console.dir(jsonData);
            home.foodtrucks = jsonData;
        }
    }
})();