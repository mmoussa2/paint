import Point from './point.model.js';

export function getMouseCoords(e, canvas){
  let rect = canvas.getBoundingClientRect();
  let x = e.clientX  - rect.left;
  let y = e.clientY - rect.right;
  return new Point(x,y) ; 
}