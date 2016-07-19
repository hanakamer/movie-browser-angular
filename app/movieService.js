import {app} from '../app/app'
import slug from 'slug'

export let movieService = function ($http) {
  let api_key = "e4f84639131d542ce21dc31295786c10";
  let base = "http://api.themoviedb.org/3/";
  let now_playing ="movie/now_playing";

  let getNowPlaying = function(page){
      return $http.get(base+now_playing+"?page="+ page + "&api_key="+ api_key).
        then(function(response){
          return response.data
        })

  }
  return {
    getNowPlaying: getNowPlaying
  }
}

let module = angular.module("movieApp");
module.factory("movieService", movieService)
