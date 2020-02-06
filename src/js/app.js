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
paint.init();



document.querySelectorAll("[data-command").forEach(
  item =>{
    item.addEventListener("click", e =>{
      console.log(item.getAttribute("data-command"));
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

document.querySelectorAll("[data-line-width").forEach(
  item => { 
    item.addEventListener("click", e => {
       document.querySelector("[data-line-width].active").classList.toggle("active");
       item.classList.toggle("active");
    });
  }
);

