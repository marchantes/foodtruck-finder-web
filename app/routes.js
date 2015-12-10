(function(){
    'use strict';

    var app = angular
        .module('foodtruckers');

    app.config(config);

    function config($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/views/index.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();