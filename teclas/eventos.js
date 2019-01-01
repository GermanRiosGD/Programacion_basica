//Declarar variables
var papel = document.getElementById("lienzo").getContext("2d");
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var x = 100;
var y = 100;
//Establecer listeners
document.addEventListener("keydown",dibujarTeclado);
//Instrucciones a realziar
dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

//Declararfunciones
function dibujarTeclado(evento){
  var movimiento = 2;
  var colorcito = "green";
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
      x = x + movimiento;
      break;
    default:
      console.log("Otra tecla");
  }
}
function dibujarLinea(color,x1,y1,x2,y2,lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}
