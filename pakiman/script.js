var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


var coleccion = [];
coleccion.push(new Pakiman("Tocinauro",120,40,"Toci!"));
coleccion.push(new Pakiman("Pokacho",80,50,"Poka!"));
coleccion.push(new Pakiman("Cauchin",100,30,"Cau!"));

for (var paki of coleccion) {
  paki.mostrar();
}
