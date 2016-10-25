
angular.module('myApp')
    .controller('CarouselDemoCtrl', function ($scope, $rootScope, $window, $http) {

        $scope.myInterval = 4000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
     $rootScope.user = {};
     $rootScope.user.details = {};
     $rootScope.user.travel = {};

        $scope.today = function() {
            $scope.boardingDt = $scope.returnDt = new Date();
        };

        $scope.today();

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

        $scope.dateOptions = {
            dateDisabled: false,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };


    })
;