var app = angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        // $locationProvider.html5Mode(false);
        $stateProvider
        //*************** Login Routes ***********************//
            .state('overview', {
            url: '/',
            templateUrl: 'views/landing.html',
            controller: 'appController'
        });

        $urlRouterProvider.otherwise('/');
    }]);

app.controller('appController', ['$scope', '$stateParams', '$state', '$window', '$http', '$rootScope', '$q', '$location', '$anchorScroll', '$timeout', function($scope, $stateParams, $state, $window, $http, $rootScope, $q, $location, $anchorScroll, $timeout) {

    console.log("hello world!");
}]);
