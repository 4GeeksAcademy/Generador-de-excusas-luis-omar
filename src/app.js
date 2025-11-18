import "bootstrap";
import "./style.css";



import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let quien = ['El baterista', 'Mi compa de la banda', 'El chavo del sonido', 'El DJ del barrio'];
let accion = ['se puso creativo y movió', 'se tropezó y tiró', 'apachurró sin querer', 'se emocionó y desconectó'];
let que = ['mi guitarra', 'el micro', 'los parlantes', 'la mezcladora', 'el cable principal que nadie debe tocar'];
let cuando = ['antes del toque', 'justo cuando afinaba', 'en pleno jamming', 'cuando tomaba agua', 'dos segundos antes de empezar la rola'];

  
  //let quienAleatorio = generadorDeExcusas(quien);
  //let accionAleatorio = generadorDeExcusas(accion);

  let excusaCompleta = `${generadorDeExcusas(quien)} ${generadorDeExcusas(accion)} ${generadorDeExcusas(que)} ${generadorDeExcusas(cuando)}`;
  let elemento = document.getElementById("excuse");
  elemento.innerHTML = excusaCompleta;

  /*console.log(elemento.innerHTML);*/
};

function generadorDeExcusas(lista) {
  let indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}
