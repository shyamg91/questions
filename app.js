var app = angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        // $locationProvider.html5Mode(false);
        $stateProvider
        //*************** Login Routes ***********************//
            .state('overview', {
                url: '/',
                templateUrl: 'views/landing.html',
                controller: 'appController'
            })
            .state('q1', {
                url: '/q1',
                templateUrl: 'views/q1.html',
                controller: 'appController'
            })
            .state('q2', {
                url: '/q2',
                templateUrl: 'views/q2.html',
                controller: 'appController'
            })
            .state('q3', {
                url: '/q3',
                templateUrl: 'views/q3.html',
                controller: 'appController'
            })
            .state('q4', {
                url: '/q4',
                templateUrl: 'views/q4.html',
                controller: 'appController'
            });

        $urlRouterProvider.otherwise('/');
    }]);

app.controller('appController', ['$scope', '$stateParams', '$state', '$window', '$http', '$rootScope', '$q', '$location', '$anchorScroll', '$timeout', function($scope, $stateParams, $state, $window, $http, $rootScope, $q, $location, $anchorScroll, $timeout) {

    console.log("hello world!");
}]);
