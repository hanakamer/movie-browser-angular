import {app} from '../app/app'
import slug from 'slug'
import $ from 'jquery';

export let movieService = function ($http) {
  let api_key = "e4f84639131d542ce21dc31295786c10";
  let themoviedb_base = "http://api.themoviedb.org/3/";
  let omd_base = "http://www.omdbapi.com/"
  let now_playing ="movie/now_playing";
  let backdrop_path ='';
  let movie_list=[];

  let getNowPlaying = function(page){
    movie_list=[];
      return $http.get(themoviedb_base+now_playing+"?page="+ page + "&api_key="+ api_key).
        then(function(response){
          movie_list.push(response.data.results)
          return response.data
        })

  }


  let getMovie = function(id){
    return $http.get(themoviedb_base+"movie/"+ id + "?api_key="+ api_key)
    .then(function(response){

        self.imdb_id = response.data.imdb_id;

      })
      .then(function(imdb_id){

        imdb_id = self.imdb_id
        return $http.get(omd_base+"?i="+ imdb_id + "&plot=long&r=json")
        // return $http.get(themoviedb_base + "find/" + imdb_id + "?external_source=imdb_id"+ "&api_key="+ api_key)

        .then(function(response){

          console.log(response.data)
          return response.data;

        })
      })

  }
  return {
    getMovie: getMovie,
    getNowPlaying: getNowPlaying,
    movie_list: movie_list
  }
}

let module = angular.module("movieApp");
module.factory("movieService", movieService)
