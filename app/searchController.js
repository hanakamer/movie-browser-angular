
import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let SearchController =  function(movieService, $location, $routeParams){
  let self = this;
  self.query = $routeParams.query;
  self.page = $routeParams.page;

  let onComplete = function(data){
    self.movies = data.results;
    self.total_pages= data.total_pages;
    self.page =  data.page;
    $location.path('/search/'+self.query+'/'+data.page)

  }

  let onError = function(reason){
    self.error = "filmler yuklenemedi"
  }


  self.loadMovies = function (){
    movieService.searchMovie(self.query,self.page)
      .then(onComplete, onError);
  }


  self.goToMovie = function(id){
    $location.path('/movie/'+id)
  }

  self.Prev = function(){
    self.page -=1;
    self.loadMovies();
  }

  self.Next = function(){
    self.page +=1;
    self.loadMovies();
  }

  self.search = function(title){
    self.query = title;
    self.page =1;
    self.loadMovies();
  }

  if(self.query){
    self.loadMovies()
  }

};

app.controller("SearchController", SearchController)
