
import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let MainController =  function(movieService, $location, $routeParams){
  let self = this;
  self.page = 1;


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
  }

  self.Next = function(){
    self.page +=1;
    self.loadMovies();
  }
  self.loadMovies();
  movieService.getNowPlaying($routeParams.page)
  .then(onComplete, onError);



  // var canvas = document.getElementById("canvas");
  // var ctx = canvas.getContext("2d");
  // ctx.scale( window.devicePixelRatio, window.devicePixelRatio);
  // function drawCanvas() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.beginPath();
  //   ctx.arc(30, 30, 25, 1.5 *Math.PI ,2 * Math.PI * (8/10) + 1.5 *Math.PI, false);
  //   ctx.lineWidth = 3;
  //   ctx.strokeStyle = '#FAE807'
  //   ctx.stroke();
  // }
  // window.addEventListener("load", drawCanvas);

};

app.controller("MainController", MainController)
