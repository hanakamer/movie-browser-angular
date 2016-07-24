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
    .when("/page/:page", {
       templateUrl: "main.html",
       controller: "PagesController",
       controllerAs: "self"
     })
    .when("/movie/:id",{
      templateUrl:"detail.html",
      controller:"DetailController",
      controllerAs:"self"
    })
    .when("/search/",{
      templateUrl: "search.html",
      controller: "SearchController",
      controllerAs: "self"
    })
    .when("/search/:query/:page",{
      templateUrl:"search.html",
      controller:"SearchController",
      controllerAs:"self"
    })
    .when("/genres/",{
      templateUrl:"genres.html",
      controller:"GenresController",
      controllerAs:"self"
    })
    .when("/genre/:genre_name/:genre_id/:page",{
      templateUrl:"main.html",
      controller:"GenreController",
      controllerAs:"self"
    })

    .otherwise({redirectTo: "/main/"});
});

app.config(function(LightboxProvider){
  LightboxProvider.templateUrl = 'lightbox-modal.html'
})
