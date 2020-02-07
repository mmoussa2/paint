import Point from './point.model.js';
import Fill from './fill.class.js';
import { getMouseCoords, findDistance } from './utility.js'

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

export default class Paint {
  constructor(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.context = canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.undoStack = [];
    this.undoLimit = 3;
  }

   set activeTool(tool){
    this.tool = tool
    console.log(this.tool);
  }

  set lineWidth(linewidth){
    this._lineWidth = linewidth;
    this.context.lineWidth = this._lineWidth;
  }

  set brushSize(brushsize){
    this._brushSize = brushsize;
  }

  set selectedColor(color){
    this.color = color;
    this.context.strokeStyle = this.color;
  }

  init(){
    this.canvas.onmousedown = e => this.onMouseDown(e);
  }

  onMouseDown(e){
    this.savedData = this.context.getImageData(0,0,this.canvas.clientWidth, this.canvas.height);

    if(this.undoStack.length >= this.undoLimit){
      this.undoStack.shift();
    }
    this.undoStack.push(this.savedData);
    
    this.canvas.onmousemove = e => this.onMouseMove(e);
    document.onmouseup = e => this.onMouseUp(e);
    this.startPos = getMouseCoords(e, this.canvas);
    if(this.tool == TOOL_PENCIL || this.tool == TOOL_BRUSH){
      this.context.beginPath();
      this.context.moveTo(this.startPos.x, this.startPos.y);
    }else if(this.tool == TOOL_ERASER){
      this.context.clearRect(this.startPos.x, this.startPos.y, this._brushSize, this._brushSize);
    }
    else if (this.tool == TOOL_PAINT_BUCKET) {
      // new Fill(this.canvas, this.startPos, this.color)
      // this.context.beginPath();
      // this.context.moveTo(this.startPos.x, this.startPos.y);
    }
  }

  onMouseMove(e){
    this.currentPos = getMouseCoords(e, this.canvas);
    switch(this.tool){
      case TOOL_LINE:
      case TOOL_RECTANGLE:
      case TOOL_CIRCLE:
      case TOOL_TRIANGLE:
        this.drawShape();
        break;
      case TOOL_PENCIL:
        this.drawFreeLine(this._lineWidth);
        break;
      case TOOL_BRUSH:
        this.drawFreeLine(this._brushSize);
        break;
       case TOOL_ERASER:
        this.context.clearRect(this.currentPos.x, this.currentPos.y, this._brushSize, this._brushSize);
      case TOOL_PAINT_BUCKET:
        this.draw(this.currentPos.x, this.currentPos.y)
        default:
          break;
    }
  }

  onMouseUp(e){
    this.canvas.onmousemove = null;
    document.onmouseup = null;
  }

  drawShape(){
    this.context.putImageData(this.savedData, 0, 0);
    this.context.beginPath();
    if(this.tool == TOOL_LINE){
      this.context.moveTo(this.startPos.x, this.startPos.y)
      this.context.lineTo(this.currentPos.x, this.currentPos.y)
    }else if(this.tool == TOOL_RECTANGLE){
      this.context.rect(this.startPos.x, this.startPos.y, this.currentPos.x - this.startPos.x, this.currentPos.y - this.startPos.y);
    } else if (this.tool == TOOL_CIRCLE) {
      let distance = findDistance(this.startPos, this.currentPos)
      this.context.arc(this.startPos.x,this.startPos.y,distance, 0 , 2 * Math.PI, false)
    } else if (this.tool == TOOL_TRIANGLE) {
      this.context.moveTo(this.startPos.x + (this.currentPos.x - this.startPos.x)/2, this.startPos.y);
      this.context.lineTo(this.startPos.x, this.currentPos.y);
      this.context.lineTo(this.currentPos.x, this.currentPos.y);
      this.context.closePath();
    }
    this.context.stroke();
  }

  drawFreeLine(lineWidth){
    this.context.lineWidth = lineWidth;
    this.context.lineTo(this.currentPos.x, this.currentPos.y);
    this.context.stroke();
  }

  undoPaint(){
    if(this.undoStack.length > 0){
      this.context.putImageData(this.undoStack[this.undoStack.length - 1], 0, 0);
      this.undoStack.pop();
    }else{
      return ;
    }
  }


 draw(start, end) {
  var ctx = document.getElementById('canvas').getContext('2d');
  //  ctx.drawImage(document.getElementById('source'),33, 71, 104, 124, 21, 20, 87, 104);
   ctx.drawImage(document.getElementById('source'), start, end);
  // var img = new Image();
  // img.onload = function () {
  //   for (var i = 0; i < 4; i++) {
  //     for (var j = 0; j < 3; j++) {
  //       ctx.drawImage(img, j * 50, i * 38, 50, 38);
  //     }
  //   }
  // };
  // img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}


}