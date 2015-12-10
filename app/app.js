(function() {
    'use strict';

    var app = angular
        .module('BevybarApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/views/index.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();