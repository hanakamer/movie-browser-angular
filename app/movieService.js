import {app} from '..app/app'
import slug from 'slug'

export let movieService = function ($http) {
  let getMovies = function (title){
    return $http.get("http://www.omdbapi.com/?t="+slug(title)+"&y=&plot=short&r=json")
      .then(function(response){
        return response.data;
      })
  };

  return {
    getMovies: getMovies
  }
}

let module = angular.module("movieApp");
module.factory("movieService", movieService)
