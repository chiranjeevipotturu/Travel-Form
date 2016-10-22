angular.module('myApp')
    .controller('StepTwoCtrl', function ($scope, $stateParams, $rootScope, $window, $http) {
        console.log('2 ctrl', $scope.user, $stateParams);
    });