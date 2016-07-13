import {app} from '../app/app'
import {movieService} from '../app/movieService'

export let MainController =  function(movieService){

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
