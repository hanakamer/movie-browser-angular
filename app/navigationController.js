import {app} from '../app/app';

export let NavigationController =  function($location){
  let self = this;
  self.search = function(){
    $location.path('/search/');
  }
  self.genre = function(){
    $location.path('/genres/');
  }
};

app.controller("NavigationController", NavigationController)
