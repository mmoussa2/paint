// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var mouse = false;

// ctx.lineJoin = "round";
// ctx.lineCap = "round";

// var positionX, positionY;

// var brush = document.getElementById("brush");
// var eraser = document.getElementById("erase");
// var size = document.getElementById("myRange");

// var color = document.getElementById("myColor");
// var myColor = color.value;
// ctx.strokeStyle = myColor;

// var size = document.getElementById("myRange");
// var mySize = size.value;
// ctx.lineWidth = mySize;

// var saveLink = document.getElementById("saveLink");

// brush.style.border ="2px solid red";
// canvas.style.cursor = "pointer";
// canvas.addEventListener("mousedown", brushDown, false);
// canvas.addEventListener("mousemove", brushMove, false);
// canvas.addEventListener("mouseup", brushUp, false);

// color.addEventListener('change', colorChange);

// function colorChange(){
//   myColor = color.value;
//   ctx.strokeStyle = myColor
// }


// size.addEventListener("change", sizeChange);

// function sizeChange(){
//   mySize = size.value;
//   ctx.lineWidth = mySize
// }

// function getCoordinates(canvas, e){
//   var rect = canvas.getBoundingClientRect();
//   return {
//     x: e.clientX - rect.left ,
//     y: e.clientY - rect.top
//   };
// }

// function brushDraw(canvas, positionX, positionY){
//   if(mouse){
//     ctx.lineTo(positionX, positionY);
//     ctx.stroke();
//     canvas.style.cursor = "pointer";
//   }
// }

// function brushMove(e){
//   var coordinates = getCoordinates(canvas, e);
//   positionX = coordinates.x;
//   positionY = coordinates.y;

//   brushDraw(canvas, positionX, positionY);
// }

// function brushUp(){
//  mouse = false;
//  canvas.style.cursor = "default";
// }

// function brushDown(e) {
//   mouse = true;
//   var coordinates = getCoordinates(canvas, e);
//   canvas.style.cursor = "pointer";
//   positionX = coordinates.x;
//   positionY = coordinates.y;
//   ctx.beginPath();
//   ctx.moveTo( positionX, positionY);
//   ctx.lineTo(positionX, positionY);
//   ctx.stroke();
// }

// function brushClick(){
//   var brushColor = document.getElementById("myColor");
//   ctx.strokeStyle = brushColor.value;
//   brush.style.border = "2px solid red";
//   eraser.style.border = " none";

//   canvas.addEventListener("mousedown", brushDown, false);
//   canvas.addEventListener("mousemove", brushMove, false);
//   canvas.addEventListener("mouseup", brushUp, false);
// }

// function eraserClick(e){
//   ctx.strokeStyle = "white";
//   eraser.style.border = "2px solid red";
//   brush.style.border = " none";

//   canvas.addEventListener("mousedown", brushDown, false);
//   canvas.addEventListener("mousemove", brushMove, false);
//   canvas.addEventListener("mouseup", brushUp, false);
// }

// function resetClick(){
//   window.location.reload();
// }

// function saveClick(){
//   var data = canvas.toDataURL();
//   saveLink.href = data;
//   saveLink.download = "paint.png";
// }

// brush.addEventListener('click', brushClick);
// eraser.addEventListener('click', eraserClick);
// reset.addEventListener('click', resetClick);
// saveLink.addEventListener('click', saveClick);

//..........................








