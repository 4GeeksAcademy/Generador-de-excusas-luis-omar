import "bootstrap";
import "./style.css";



import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const quien = ["Mi perro", "Mi abuela", "Mi Primo", "Mi tia", "mi amigo","mi gato"];
  const accion = ["se comio mi tarea", "se fue de fiesta", "se hizo el delicisoso", "se puso a llorar","se volvio loco", "araño a un perro"];
  
  let quienAleatorio = generadorDeExcusas(quien);
  let accionAleatorio = generadorDeExcusas(accion);

  let elemento = document.getElementById("excuse");
  elemento.innerHTML = `${quienAleatorio} ${accionAleatorio}`;

  /*console.log(elemento.innerHTML);*/
};

function generadorDeExcusas(lista) {
  let indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}
