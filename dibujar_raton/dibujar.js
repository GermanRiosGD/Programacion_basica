//Declarar variables
var cuadrito = document.getElementById("lienzo");
var papel = cuadrito.getContext("2d");
var mouse = 0;
var x = 0;
var y = 0;
colorcito= "black";
//Establecer listeners
cuadrito.addEventListener("mousemove",dibujarMouse);
cuadrito.addEventListener("mousedown",prender);
cuadrito.addEventListener("mouseup",apagar);

//Instrucciones a realziar
dibujarLimites(colorcito,papel);
//Declararfunciones
function prender(evento){
  mouse = 1;
  x = evento.offsetX;
  y = evento.offsetY;
}
function apagar(evento) {
  mouse = 0;
}
function dibujarMouse(evento){
  if (mouse) {
    dibujarLinea(colorcito,x,y,evento.offsetX,evento.offsetY,papel);
    x=evento.offsetX;
    y =evento.offsetY;
    console.log(evento.offsetX +" "+evento.offsetY);
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
function dibujarLimites(color,lienzo){
  dibujarLinea(color,1,1,1,299,lienzo);
  dibujarLinea(color,1,299,299,299,lienzo);
  dibujarLinea(color,299,1,1,1,lienzo);
  dibujarLinea(color,299,1,299,299,lienzo);
}
