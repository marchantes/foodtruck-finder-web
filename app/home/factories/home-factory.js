(function() {
    'use strict';

    var app = angular
        .module('foodtruckers');

    app.factory('homeFactory', homeFactory);

    function homeFactory ($q, $http, $location) {
        var data = {};

        data.getFoodtrucks = getFoodtrucks;

        function getFoodtrucks() {
            return $http.get('http://kulturyuxta.com/api/v1/foodtrucks/?format=json')
                .error(errorMessage);
        }

        function errorMessage(response) {
            console.log('There was an error', response);
        }

        return data;
    }

})();