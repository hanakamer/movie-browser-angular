import {app} from '../app/app';
import {movieService} from '../app/movieService';

export let MainController =  function(movieService){
  let self = this;
  self.page = 1;
  let onComplete = function(data){
    self.movies = data.results;
    self.total_pages= data.total_pages;
    console.log(data)
    // $location.path("/ilce/"+self. district)
  }


  let onError = function(reason){
    self.error = "filmler yuklenemedi"
  }


  let loadMovies =function (page){
      movieService.getNowPlaying(page)
        .then(onComplete, onError);
  }

  self.nextPage = function(page){
    self.page += 1;
    console.log(page)
    movieService.getNowPlaying(page)
      .then(onComplete, onError);
  }

  loadMovies(self.page);



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
