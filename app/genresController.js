
import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let GenresController =  function(movieService, $location){
  let self = this;
  let onComplete = function(data){
    self.movies = data.genres;
  }
  let onError = function(reason){
    self.error = "filmler yuklenemedi";
  }
  let loadMovies =function (){
    movieService.getGenre()
      .then(onComplete, onError);
  }
  self.getListOfGenre = function(genre){
    $location.path('/genre/'+genre.name+'/'+genre.id+"/1")
  }

  loadMovies();
};

app.controller("GenresController", GenresController)
