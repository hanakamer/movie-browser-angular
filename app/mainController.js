import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let MainController =  function(movieService, $location, $routeParams){
  let self = this;

  if (self.page !== NaN && self.page !== undefined){
    self.page = $routeParams.page;
  }else{
    self.page = 1;
  }

  let onComplete = function(data){
    self.movies = data.results;
    self.total_pages= data.total_pages;
  }

  let onError = function(reason){
    self.error = "filmler yuklenemedi"
  }

  self.loadMovies =function (){
    movieService.getNowPlaying(self.page)
      .then(onComplete, onError);
  }
  self.Prev = function(){
    self.page -= 1;
    self.loadMovies();
    $location.path('/page/'+self.page)
  }

  self.Next = function(){
    self.page += 1;
    self.loadMovies();
    $location.path('/page/'+self.page)
  }

  self.goToMovie= function(id){
    $location.path('/movie/'+id)
  }

  self.loadMovies();

};

app.controller("MainController", MainController)
