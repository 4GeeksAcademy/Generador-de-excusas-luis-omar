import "bootstrap";
import "./style.css";



import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
const quien = [
  "Mi guitarra celosa",
  "El pianista del grupo",
  "Mi profe de solfeo",
  "El bajista dormilón",
  "El baterista filosófico",
  "Mi micro que siempre se apaga",
  "El director de la banda",
  "El DJ del barrio",
  "Mi afinador con actitud",
  "El trompetista romántico"
];

const accion = [
  "no me dejó salir hasta que afiné hasta el alma.",
  "dijo que hoy no podía practicar porque el ritmo no estaba de humor.",
  "me pidió que tocara un bolero pa’ ver si volvía su ex.",
  "me hizo repetir la canción porque dijo que el do sonó con pereza.",
  "me juró que los acordes menores traen mala suerte los lunes.",
  "se enojó porque bailé fuera del tiempo y me castigó con metrónomo.",
  "me convenció de que el silencio también cuenta como ensayo.",
  "se deprimió porque el WiFi entró en modo bemol.",
  "me hizo acompañarlo a buscar inspiración al puesto de fritas.",
  "dijo que sin café no hay compás ni esperanza."
];

  
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
