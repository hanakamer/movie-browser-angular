import angular from 'angular';
import 'angular-route';
import 'angular-ui-bootstrap';
import 'angular-bootstrap-lightbox';

export let app = angular.module('movieApp', ['ngRoute','ui.bootstrap', 'bootstrapLightbox']);
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
    .when("/main/",{
      templateUrl:"main.html",
      controller:"MainController",
      controllerAs:"self"
    })
    // .when("/page/:page", {
    //    templateUrl: "main.html",
    //    controller: "MoviesController",
    //    controllerAs: "self"
    //  })
    .when("/movie/:id",{
      templateUrl:"detail.html",
      controller:"DetailController",
      controllerAs:"self"
    })
    .otherwise({redirectTo: "/main/"});
});

app.config(function(LightboxProvider){
  LightboxProvider.templateUrl = 'lightbox-modal.html'
})
