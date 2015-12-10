(function() {
    'use strict';

    var app = angular
        .module('BevybarApp');

    app.directive('beersSlider', beersSlider(homeFactory));

    function beersSlider(homeFactory) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/home/directives/beers-slider.html',
            controller: beersSliderController,
            controllerAs: 'beersslider',
            bindToController: true,
            link: function (scope, element, attrs) {
                scope.getBeers = homeFactory.getBeers;
            }
        };
    }


    function beersSliderController(homeFactory) {
        var beersslider = this;

        homeFactory.getBeers()
            .success(beersSuccess);

        function beersSuccess(jsonData, statusCode) {
            console.log('The request was successful', statusCode);
            console.dir(jsonData);
            beersslider.beers = jsonData;
        }
    }

})();