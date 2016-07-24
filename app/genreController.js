
import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let GenreController =  function(movieService, $location, $routeParams){
  let self = this;

  self.genre_id = parseInt($routeParams.genre_id);
  self.genre_name = $routeParams.genre_name;
  self.page = $routeParams.page;

  self.Prev = function(){
    self.page -=1;
    loadMovies();
  }

  self.Next = function(){
    self.page +=1;
    loadMovies();
  }

  self.goToMovie= function(id){
    $location.path('/movie/'+id)
  }

  let onComplete = function(data){
    self.movies = data.results;
    self.page = data.page;
    self.total_pages= data.total_pages;
      $location.path('/genre/'+self.genre_name+'/'+self.genre_id+'/'+data.page)
  }
  let onError = function(reason){
    self.error = "filmler yuklenemedi"
  }
  let loadMovies =function (){
    movieService.getListOfGenre(self.genre_id,self.page)
      .then(onComplete, onError);
  }

  loadMovies($routeParams.genre_id);


};

app.controller("GenreController", GenreController)
