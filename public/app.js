
angular.module('travelform',['ui.router', 'ui.bootstrap'])
	.config(function ($stateProvider) {
			// body...
	})

 .controller('CarouselDemoCtrl', function ($scope) {
   
   $scope.myInterval = 3000;
   $scope.noWrapSlides = false;
   $scope.active = 0;
   var slides = $scope.slides = [];
   var currIndex = 0;

   $scope.addSlide = function(i) {
     var newWidth = 1300 + slides.length + 1;
     i+=1;
     slides.push({
       image: 'assets/image' + i + '.jpg',
       id: currIndex++
     });
   };

   $scope.randomize = function() {
     var indexes = generateIndexesArray();
     assignNewIndexesToSlides(indexes);
   };

   for (var i = 0; i < 10; i++) {
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

  })
	