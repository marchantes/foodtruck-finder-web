(function() {
    'use strict';

    var app = angular
        .module('BevybarApp');

    app.factory('homeFactory', homeFactory);

    function homeFactory ($q, $http, $location) {
        var exports = {};

        exports.getBeers = getBeers;
        exports.getPacks = getPacks;

        function getBeers() {
            return $http.get('http://localhost:8000/api/v1/productbase')
                .error(errorMessage);
        }

        function getPacks() {
            return $http.get('http://localhost:8000/api/v1/package')
                .error(errorMessage);
        }

        function errorMessage(data) {
            console.log('There was an error', data);
        }

        return exports;
    }

})();