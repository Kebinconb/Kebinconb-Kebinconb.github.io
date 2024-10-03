var tarjetas = [
    'xd.jpg', 'xd.jpg', 'xd1.jpg', 'xd1.jpg',
    'xd2.jpg', 'xd2.jpg', 'xd3.jpg', 'xd3.jpg',
    'xd4.jpg', 'xd4.jpg', 'xd5.jpg', 'xd5.jpg',
    'xd6.jpg', 'xd6.jpg', 'xd7.jpg', 'xd7.jpg'
];      

var imagenTemporal, esperando = false;
var contador=0;
function cambiarImagen(imagen, indice) {
imagen.src = `./img/${tarjetas[indice]}`;
imagen.removeAttribute("onclick");
if (!esperando) imagenTemporal = imagen;
else {
    if (imagenTemporal.src == imagen.src) {
        setTimeout(function(){
            Regresar(imagenTemporal, imagen);
            desaparecerPar(imagenTemporal, imagen);
            }, 700);
    } else {
        setTimeout(function(){
        Regresar(imagenTemporal, imagen);
        }, 800);
    }
}
esperando = !esperando;
}

function Regresar(imagen1, imagen2){
imagen1.src = "./img/1.jpg";
imagen2.src = "./img/1.jpg";
imagen1.setAttribute("onclick", `cambiarImagen(this,${imagen1.id})`);
imagen2.setAttribute("onclick", `cambiarImagen(this,${imagen2.id})`);
}
function desaparecerPar(imagen1, imagen2) {
/* imagen1.src = "";
imagen1.style.display = "none";
imagen2.src = "";
imagen2.style.display = "none"; */
imagen1.style.visibility = "hidden";
imagen2.style.visibility = "hidden";
imagen1.removeAttribute("onclick");
imagen2.removeAttribute("onclick");
contador++;
if(contador != 8){
    document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador}`;
}else{
    document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador} Ganaste!!`;
}
}
function Resolver() {
    var i = 0, j = 0, temporal  = 0;
    for (let i = 0; i < tarjetas.length-1; i++) {
        j = Math.floor(Math.random() * (i+1));
        [tarjetas[i],tarjetas[j]] = [tarjetas[j],tarjetas[i]];
    }
}

function Fondo(){
    var fondo = Math.floor(Math.random()*3)+1;
    document.getElementById("tablita").style= `background-image: url("./img/fondiux${fondo}.jpg")`;
}
function Reiniciar(){
    location.reload();
}