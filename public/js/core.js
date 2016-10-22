angular.module('myApp', ['ui.bootstrap', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        console.log("Myrouter");
        $urlRouterProvider.otherwise("/step1");

        $stateProvider
            .state('step1', {
                url:"/step1",
                views: {
                    'step1': {
                        templateUrl:"templates/step1.html",
                        controller: 'CarouselDemoCtrl'
                    }
                }
            })
            .state('step2', {
                url:'/step2',
                views: {
                    'step1': {
                        templateUrl:'templates/step2.html',
                        controller: 'StepTwoCtrl'
                    }
                }
            })
            .state('step3', {
                url:'/step3',
                views: {
                    'step1': {
                        templateUrl:'templates/step3.html',
                        controller: 'StepThreeCtrl'
                    }
                }
            })
            //.state('printTicket', {
            //    url:"/printTicket",
            //    views: {
            //        'printTicket': {
            //            templateUrl:"templates/printTicket.html",
            //            controller: 'CarouselDemoCtrl'
            //        }
            //    }
            //})
            //.state('cancelTicket', {
            //    url:"/cancelTicket",
            //    views: {
            //        'printTicket': {
            //            templateUrl:"templates/printTicket.html",
            //            controller: 'CarouselDemoCtrl'
            //        }
            //    }
            //})
            //.state('cancledServices', {
            //    url:"/cancledServices",
            //    views: {
            //        'printTicket': {
            //            templateUrl:"templates/printTicket.html",
            //            controller: 'CarouselDemoCtrl'
            //        }
            //    }
            //})
            //.state('galary', {
            //    url:"/galary",
            //    views: {
            //        'printTicket': {
            //            templateUrl:"templates/printTicket.html",
            //            controller: 'CarouselDemoCtrl'
            //        }
            //    }
            //})
            //.state('feedback', {
            //    url:"/feedback",
            //    views: {
            //        'printTicket': {
            //            templateUrl:"templates/printTicket.html",
            //            controller: 'CarouselDemoCtrl'
            //        }
            //    }
            //})
            //.state('contact', {
            //    url:"/contact",
            //    views: {
            //        'printTicket': {
            //            templateUrl:"templates/contact.html",
            //            controller: 'CarouselDemoCtrl'
            //        }
            //    }
            //})

    });