import angular from 'angular';
import 'angular-utils-pagination';
import 'angular-route';
export let app = angular.module('movieApp', ['ngRoute', 'angularUtils.directives.dirPagination']);
app.filter('range', function(){
  return function(input, total) {
    total = parseInt(total);

    for (let i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  }
})
app.config(function($routeProvider){
  $routeProvider
    .when("/main",{
      templateUrl:"main.html",
      controller:"MainController",
      controllerAs:"self"
    })
    .otherwise({redirectTo: "/main"});

})
