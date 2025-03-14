const hourHTML = document.getElementById("hora");
const minuteHTML = document.getElementById("minuto");
const secondHTML = document.getElementById("segundo");

const fecha = new Date();

let hora = fecha.getHours();

if (hora < 10) {
  // Deberíamos agregar un 0 por delante al valor de la hora
  hora = "0" + hora; // "02"
}

// Insertar la hora en el HTML
hourHTML.innerText = hora;

let minute = fecha.getMinutes();

if (minute < 10) {
  minute = "0" + minute;
}

// Insertar los minutos en el HTML
minuteHTML.innerText = minute;

let second = fecha.getSeconds();

if (second < 10) {
  second = "0" + second;
}

// Insertar los segundos en el HTML
secondHTML.innerText = second;

console.log("Comenzando timeout");

setTimeout(function () {
  console.log("Función de Timeout ejecutado");
}, 5000);

setInterval(function () {
  console.log("Intervalo ejecutado");
}, 2000);
