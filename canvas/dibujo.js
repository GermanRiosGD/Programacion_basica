//Document -> Aqui traemos todo desde nuestro html
var d = document.getElementById("dibujito");
var nl = document.getElementById("nLineas");
var adarle = document.getElementById("aDarle");

//Variables -> Aqui inicializamos nuestras variables
var lienzo = d.getContext("2d");
var colorcito = "green";
var ancho = d.width;
//Listeners -> Aqui declaramos todo lo que necesite detectar algo en todo momento
adarle.addEventListener("click", dibujoPorClick);

// Estas son las lineas del marco
dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);
dibujarLinea(colorcito,299,1,1,1);
dibujarLinea(colorcito,299,1,299,299);

// Funciones -> Aqui van todas las funciones que se usan en el codigo
function dibujarLinea(color,x1,y1,x2,y2){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  //Ciclos -> Aqui van los ciclos que se ejecutaran en el codigo
  var lineas = parseInt(nl.value);
  var espacio = ancho / lineas;
  for (var l = 0; l < lineas; l++) {
    b0= espacio * l;
    b10= espacio * (l+1);
    dibujarLinea(colorcito, 0, b0, b10,300); // xi = 0 siempre , yi = 0, xf= 10, yf = 300 siempre;
    dibujarLinea(colorcito, 0, b0, (300-b10),0); // xi = = siempre, yi = 0, xf = 290 disminuye, yf = 0;
    dibujarLinea(colorcito, 300, b10, b0,0); // xi = 300 siempre, yi = 10, xf = 0, yf = 0 siempre;
    dibujarLinea(colorcito, 300, (300-b10), b0,300);// xi = 300 siempre , yi = 290 disminuye, xf = 0, yf = 300 siempre;
  }
}
