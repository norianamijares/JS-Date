const hourHTML = document.getElementById("hora");
const minuteHTML = document.getElementById("minuto");
const secondHTML = document.getElementById("segundo");
const dateHTML = document.getElementById("text");

const fechaInicial = new Date();
pintarReloj(fechaInicial)
pintarTextoFecha(fechaInicial)


setInterval(function () {
  const fecha = new Date();

  pintarReloj(fecha)
  pintarTextoFecha(fecha)
  
}, 1000);

function pintarTextoFecha(fecha) {
  const year = fecha.getFullYear();

  const day = fecha.getDate(); // 1-31

  const month = fecha.getMonth(); // 2 = marzo  0-11

  const monthName = obtenerNombreMes( month ); // "Diciembre"

  const dayOfWeek = fecha.getDay(); // 0-6 (0 = domingo, 1 = lunes, ...)

  const dayName = obtenerNombreDia(dayOfWeek) // Funcion que llamandola y pasando el dayOfWeek devuelve el nombre del dia de la semana

  // "HOY ES LUNES 17 DE MARZO DE 2025"
  const text = `HOY ES ${dayName} ${day} DE ${monthName} DE ${year}`;

  dateHTML.innerText = text;
}

function pintarReloj(fecha) {
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
}


function obtenerNombreDia(day) {
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ]

  return daysOfWeek[day]
}


function obtenerNombreMes(mes) {

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]

  return meses[mes];
  // const nombreMes = meses[mes]


  // switch(mes) {
  //   case 0:
  //     return "Enero";
  //   case 1:
  //     return "Febrero";
  //   case 2:
  //     return "Marzo";
  //   case 3:
  //     return "Abril";
  //   case 4:
  //     return "Mayo";
  //   case 5:
  //     return "Junio";
  //   case 6:
  //     return "Julio";
  //   case 7:
  //     return "Agosto";
  //   case 8:
  //     return "Septiembre";
  //   case 9:
  //     return "Octubre";
  //   case 10:
  //     return "Noviembre";
  //   case 11:
  //     return "Diciembre";
  //   default:
  //     return null;
  // }

  // if(mes === 0) return "Enero";

  // if(mes === 1) return "Febrero";

  // if(mes === 2) return "Marzo";

  // if(mes === 3) return "Abril";

  // if(mes === 4) return "Mayo";

  // if(mes === 5) return "Junio";

  // if(mes === 6) return "Julio";

  // if(mes === 7) return "Agosto";

  // if(mes === 8) return "Septiembre";

  // if(mes === 9) return "Octubre";

  // if(mes === 10) return "Noviembre";

  // if(mes === 11) return "Diciembre";

  // if (mes === 0) {
  //   return "Enero";

  // } else if (mes === 1) {

  //   return "Febrero";

  // } else if (mes === 2) {

  //   return "Marzo";

  // } else if (mes === 3) {

  //   return "Abril";

  // } else if (mes === 4) {

  //   return "Mayo";

  // } else if (mes === 5) {

  //   return "Junio";

  // } else if (mes === 6) {

  //   return "Julio";

  // } else if (mes === 7) {

  //   return "Agosto";

  // } else if (mes === 8) {

  //   return "Septiembre";

  // } else if (mes === 9) {

  //   return "Octubre";

  // } else if (mes === 10) {

  //   return "Noviembre";

  // } else if (mes === 11) {

  //   return "Diciembre";
  // }

  console.log("Fin de la función obtenerNombreMes")

}

// Ejecutar una función después de un tiempo determinado
// setTimeout(funcion, tiempo en milisegundos)
setTimeout(function () {
  console.log("Función de Timeout ejecutado");
}, 5000);

// clearInterval(intervalo); // Detener el intervalo
