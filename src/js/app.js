import { 
  TOOL_LINE, 
  TOOL_RECTANGLE, 
  TOOL_CIRCLE, 
  TOOL_TRIANGLE, 
  TOOL_PAINT_BUCKET, 
  TOOL_PENCIL, 
  TOOL_BRUSH, 
  TOOL_ERASER
} from './tool.js';

import Paint from './paint.class.js';

var paint = new Paint("canvas");
paint.activeTool = TOOL_LINE;
paint.lineWidth = 1;
paint.brushSize = 4;
paint.selectedColor = "#000000"
paint.init();


document.querySelectorAll("[data-command]").forEach(
  item =>{
    item.addEventListener("click", e =>{
      let command = item.getAttribute("data-command");
      if(command === 'undo'){
        paint.undoPaint();
      }else if(command === 'download'){
        var canvas = document.getElementById("canvas");
        var image = canvas.toDataURL("image/png", 1.0)
        .replace("image/png", "image/octet-stream");
        var link = document.createElement("a");
        link.download = "image.png";
        link.href = image;
        link.click();

      }
    });
  }
);

document.querySelectorAll("[data-tool]").forEach(
  item =>{
    item.addEventListener("click", e => {
      document.querySelector("[data-tool].active").classList.toggle("active");
      item.classList.toggle("active");
      
      let selectedTool = item.getAttribute("data-tool");
      paint.activeTool = selectedTool;
     
       switch(selectedTool){
         case TOOL_LINE:
         case TOOL_RECTANGLE:
         case TOOL_CIRCLE:
         case TOOL_TRIANGLE:
         case TOOL_PENCIL:
           document.querySelector(".group.for-shapes").style.display = "block";
           document.querySelector(".group.for-brush").style.display = "none";
           break;
         case TOOL_BRUSH:
         case TOOL_ERASER:
           document.querySelector(".group.for-brush").style.display = "block";
           document.querySelector(".group.for-shapes").style.display = "none";
           break;
           default:
           document.querySelector(".group.for-shapes").style.display = "none";
           document.querySelector(".group.for-brush").style.display = "none";
       }
    });
  }
);

document.querySelectorAll("[data-line-width]").forEach(
  item => { 
    item.addEventListener("click", e => {
       document.querySelector("[data-line-width].active").classList.toggle("active");
       item.classList.toggle("active");

       let linewidth = item.getAttribute("data-line-width");
       paint.lineWidth = linewidth;
    });
  }
);

document.querySelectorAll("[data-brush-size]").forEach(
  item => {
    item.addEventListener("click", e => {
      document.querySelector("[data-brush-size].active").classList.toggle("active");
      item.classList.toggle("active");

      let brushSize = item.getAttribute("data-brush-size");
      paint.brushSize = brushSize;
    });
  }
);


var color = document.getElementById("myColor");
// var myColor = color.value;
// ctx.strokeStyle = myColor;

color.addEventListener('change', colorChange);

function colorChange(){
  paint.selectedColor= color.value;
  
}

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', resetClick);

function resetClick(){
  window.location.reload();
}

