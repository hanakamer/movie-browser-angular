
import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let DetailController =  function(movieService, $location, $routeParams){
  let self = this;
  let id = $routeParams.id
  let imdb_rating;
  let movieDetail = function(id){
    movieService.getMovie(id)
    .then(function(response){
      self.movie = response;
      if(response.imdbRating){
        drawCanvas(response.imdbRating)
      }
    });;
  }

  movieDetail(id);

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.scale( window.devicePixelRatio, window.devicePixelRatio);

  function drawCanvas(rating) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(30, 30, 25, 1.5 *Math.PI ,2 * Math.PI * (rating/10) + 1.5 *Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FAE807';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(30, 30, 25, 1.5 *Math.PI ,2 * Math.PI * ((rating-10)/10) + 1.5 *Math.PI, true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'grey';
    ctx.stroke();



  }

};

app.controller("DetailController", DetailController)
