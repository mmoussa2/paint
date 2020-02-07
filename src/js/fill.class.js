export default class Fill{
   constructor(canvas, point, color){
     this.context = canvas.getContext("2d");
     this.imageData = this.context.getImageData(0, 0, this.context.canvas.width, this.context.canvas.height);
      
     const targetColor = this.getPixel(point);
     const fillColor = this.hexToRgba(color);
   
    }

   floodFill(point,targetColor, fillColor){

   }

   getPixel(point){
      if(point.x < 0 || point.y < 0 || point.x >= this.imageData.width, point.y >= this.imageData.height){
         return [-1,-1,-1,-1];
      }else{
         const offSet = (point.y * this.imageData + point.x) * 4;
         return [
            this.imageData.data[offSet + 0],
            this.imageData.data[offSet + 1],
            this.imageData.data[offSet + 2],
            this.imageData.data[offSet + 3]
         ];
       }
   }

   hexToRgba(hex){
      var result = /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);
   }
}