
angular.module('myApp')
    .controller('CarouselDemoCtrl', function ($scope, $rootScope, $window, $http) {

        $scope.myInterval = 4000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
     $rootScope.user = {};
     $rootScope.user.details = {};
     $rootScope.user.travel = {};
        console.log('ctrl loaded...');

      /*  var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function(i) {
            var newWidth = 1300 + slides.length + 1;
            i+=1;
            slides.push({
                image: 'images/img' + i + '.jpg',
                id: currIndex++
            });
        };

        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            $scope.addSlide(i);
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        $scope.next = function(index){
            $scope.active = index;
            console.log('active', $scope.user);
        };*/

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