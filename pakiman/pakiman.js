class Pakiman {
  constructor(n,v,a,g) {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.grito = g;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar(){
    document.write(this.grito)
  }
  mostrar(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" +this.nombre+"</strong><br />");
    document.write("Vida: "+this.vida+"<br />");
    document.write("Ataque: "+this.ataque);
    document.write("</p>");
  }
}
