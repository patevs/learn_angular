// Code goes here

//'use strict';

// Required dependencies:
/*
  angular-animate
  angular-aria
  angular-material
  angular-messages
*/

// import angular
//var angular = require('angular');

// Declare app level module 'infoApp'
var ngApp = angular.module('infoApp', ['ngMaterial', 'ngMessages']);

// Define the `InputController` controller on the `infoApp` module
ngApp.controller('InputController', function InputController($scope) {
    $scope.user = {
        name: '',
        email: '',
    };
})
.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('green')
        .dark();
});

// EOF

