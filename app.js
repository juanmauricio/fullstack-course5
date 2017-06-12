(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.CheckIfTooMuch = function () {

            var lm = $scope.lunchmenu.split(",");

            if (lm.length <= 3) {
                $scope.placeHolderText = "Enjoy";
            }
            else {
                $scope.placeHolderText = "Too much!";
            }

        };
    }
    
})();
