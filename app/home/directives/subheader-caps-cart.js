(function() {
    'use strict';

    var app = angular
        .module('BevybarApp');

    app.directive('subheaderCapsCart', subheaderCapsCart);

    function subheaderCapsCart() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'app/home/directives/subheader-caps-cart.html',
            controller: subheaderCapsCartController,
            controllerAs: 'capscart',
            bindToController: true
        };
    }

    function subheaderCapsCartController() {
        var capscart = this;
        capscart.number = 2;
        capscart.pack = new Array(12);
        capscart.completedpacks = 3;
        capscart.money = 30;

        capscart.isSelected = isSelected;

        function isSelected(index){
            var count = capscart.count_items;
            if( count <= 12 ){
                if(index < count){
                    return true;
                }
            }else{
                var res = count%12;
                if( index < res ){
                    return true;
                }
            }
            return false;
        }
    }

})();