(function() {
    'use strict';

    var app = angular
        .module('BevybarApp');

    app.controller('homeController', homeController);

    function homeController(homeFactory) {
        var home = this;
        homeFactory.getBeers()
            .success(beersSuccess);

        homeFactory.getPacks()
            .success(packsSuccess);

        function beersSuccess(jsonData, statusCode) {
            console.log('The request was successful', statusCode);
            console.dir(jsonData);
            home.beers = jsonData;
        }

        function packsSuccess(jsonData, statusCode) {
            console.log('The request was successful', statusCode);
            console.dir(jsonData);
            home.packs = jsonData;
        }
    }
})();