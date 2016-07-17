import {app} from '../app/app'
import slug from 'slug'

export let movieService = function ($http) {
  let api_key = "e4f84639131d542ce21dc31295786c10"

  let getNowPlaying = function(page){
    return $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key="+api_key+"&page="+page).
      then(function(response){
        return response.data
      })

  }
  let getMovies = function (title){
    return $http.get("http://www.omdbapi.com/?t="+slug(title)+"&y=&plot=short&r=json")
      .then(function(response){
        return response.data;
      })
  };

  return {
    getMovies: getMovies,
    getNowPlaying: getNowPlaying
  }
}

let module = angular.module("movieApp");
module.factory("movieService", movieService)
