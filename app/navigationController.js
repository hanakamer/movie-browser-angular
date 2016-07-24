
import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let NavigationController =  function(movieService, $location, $routeParams){
  let self = this;
  self.search = function(){
    $location.path('/search/')
  }
  self.genre = function(){
    $location.path('/genres/')
  }



};

app.controller("NavigationController", NavigationController)
