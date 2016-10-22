angular.module('myApp')
    .controller('StepThreeCtrl', function ($scope, $rootScope, $window, $http) {

        $scope.onSubmit = function(user){

            $http.post('/sendmail', user)
                .then(function(res){
                    console.log('res', res);

                }, function(err){
                    console.log('err', err);
                });
        };
    });