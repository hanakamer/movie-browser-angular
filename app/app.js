import angular from 'angular';
import 'angular-route';
export let app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when("/main",{
      templateUrl:"main.html",
      controller:"MainController",
      controllerAs:"self"
    })
    .otherwise({redirectTo: "/main"});

})
