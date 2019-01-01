//Declarar variables
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//Coordenadas
var xP = 220;
var yP = 220;
var xVaca = new Array();
var yVaca = new Array();
var xCerdo = new Array();
var yCerdo = new Array();
var xPollo = new Array();
var yPollo = new Array();

//Crear objetos
var fondo = {
  url:"tile.png",
  cargaOk:false
}
var vaca = {
  url:"vaca.png",
  cargaOK:false
}
var cerdo = {
  url:"cerdo.png",
  cargaOk:false
}
var pollo = {
  url:"pollo.png",
  cargaOK:false
}
var perro = {
  url:"perro.png",
  cargaOK:false
}
//Listener de las teclas
document.addEventListener("keydown",moverPerro);
//Asignar valores a Perro
perro.imagen = new Image();
perro.imagen.src = perro.url;
perro.imagen.addEventListener("load",cargarPerro);
//Asignar valores a Fondo
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);
//Asignar valores a Vaca
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);
//Asignar valores a Cerdo
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);
//Asignar valores a Pollo
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);
//Acciónes a realizar
//var cantidad = aleatorio(5,20);
//Funciones a usar
function dibujar(){
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen,0,0);
  }
  if (vaca.cargaOK) {
    for (var i = 0; i < 20; i++) {
      papel.drawImage(vaca.imagen,xVaca[i],yVaca[i]);
    }
  }
  if (cerdo.cargaOK) {
    for (var i = 0; i < 20; i++) {
      papel.drawImage(cerdo.imagen,xCerdo[i],yCerdo[i]);
    }
  }
  if (pollo.cargaOK) {
    for (var i = 0; i < 20; i++) {
      papel.drawImage(pollo.imagen,xPollo[i],yPollo[i]);
    }
  }
  if (perro.cargaOK) {
    papel.drawImage(perro.imagen,xP,yP);
  }

}
function GuardarPosicion() {
  if (vaca.cargaOK) {
    var cantidad = aleatorio(5,20);
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(0,6);
      var y = aleatorio(0,6);
      var x = x * 70;
      var y = y * 70;
      xVaca[i] = x;
      yVaca[i] = y;
    }
  }
  if (cerdo.cargaOK) {
    var cantidad = aleatorio(5,20);
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(0,6);
      var y = aleatorio(0,6);
      var x = x * 70;
      var y = y * 70;
      xCerdo[i] = x;
      yCerdo[i] = y;
    }
  }
  if (pollo.cargaOK) {
    var cantidad = aleatorio(5,20);
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(0,6);
      var y = aleatorio(0,6);
      var x = x * 70;
      var y = y * 70;
      xPollo[i] = x;
      yPollo[i] = y;
      dibujar();
    }
  }
}
function moverPerro(evento){
  movimiento = 60;
  switch (evento.keyCode) {
    case teclas.UP:
      yP = yP - movimiento;
      dibujar();
      break;
    case teclas.DOWN:
      yP = yP + movimiento;
      dibujar();
      break;
    case teclas.LEFT:
      xP = xP - movimiento;
      dibujar();
      break;
    case teclas.RIGHT:
      xP = xP + movimiento;
      dibujar();
      break;
    default:
      console.log("Otra tecla");
  }
}
function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}
function cargarPerro(){
  perro.cargaOK = true;
  dibujar();
}
function cargarVacas(){
  vaca.cargaOK = true;
  GuardarPosicion();
}
function cargarCerdos(){
  cerdo.cargaOK = true;
  GuardarPosicion();
}
function cargarPollos(){
  pollo.cargaOK = true;
  GuardarPosicion();
}
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
