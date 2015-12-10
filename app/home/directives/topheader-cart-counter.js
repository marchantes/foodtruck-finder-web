(function() {
    'use strict';

    var app = angular
        .module('BevybarApp');

    app.directive('topheaderCartCounter', topheaderCartCounter);

    function topheaderCartCounter() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/home/directives/topheader-cart-counter.html',
            controller: topheaderCartCounterController,
            controllerAs: 'counter',
            bindToController: true,
            link: linkFunction
        };
    }

    function linkFunction(scope, element, attrs, ctrl) {}

    function topheaderCartCounterController() {
        var counter = this;
    }

})();