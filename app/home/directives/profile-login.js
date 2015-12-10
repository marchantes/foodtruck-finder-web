(function() {
    'use strict';

    var app = angular
        .module('BevybarApp');

    app.directive('profileLogin', profileLogin);

    function profileLogin() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/home/directives/profile-login.html',
            controller: profileLoginController,
            controllerAs: 'profile',
            bindToController: true
        };
    }

    function profileLoginController() {
        var profile = this;
        profile.user = null;
    }

})();