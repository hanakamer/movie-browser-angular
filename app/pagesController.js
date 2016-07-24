
import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let PagesController =  function(movieService, $location, $routeParams){
  let self = this;
  self.page =parseInt($routeParams.page);



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
    self.page -=1;
    self.loadMovies();
    $location.path('/page/'+self.page)
  }

  self.Next = function(){
    self.page +=1;
    self.loadMovies();
    $location.path('/page/'+self.page)
  }
  self.loadMovies();


  self.goToMovie= function(id){
    $location.path('/movie/'+id)
  }


};

app.controller("PagesController", PagesController)
