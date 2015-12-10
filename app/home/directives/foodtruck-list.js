(function() {
    'use strict';

    var app = angular
        .module('foodtruckers');

    app.directive('foodtruckList', foodtruckList(homeFactory));

    function foodtruckList(homeFactory) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/home/directives/foodtruck-list.html',
            controller: foodtruckListController,
            controllerAs: 'foodtrucklist',
            bindToController: true,
            link: function (scope, element, attrs) {
                scope.getFoodtrucks = homeFactory.getFoodtrucks;
            }
        };
    }


    function foodtruckListController(homeFactory) {
        var foodtrucklist = this;

        homeFactory.getFoodtrucks()
            .success(success);

        function success(jsonData, statusCode) {
            console.log('The request was successful', statusCode);
            console.dir(jsonData);
            foodtrucklist.foodtrucks = jsonData;
        }
    }

})();