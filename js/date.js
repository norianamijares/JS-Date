const hourHTML = document.getElementById("hour");
const minutesHTML = document.getElementById("minutes");
const secondsHTML = document.getElementById("seconds");
const dateHTML = document.getElementById("dateText");

console.log(hourHTML);
console.log(minutesHTML);
console.log(secondsHTML);

// hourHTML.innerText = "18";
// minutesHTML.innerText = "38";
// secondsHTML.innerText = "03";

const date = new Date();

// console.log(fecha);

let hour = date.getHours();

if(hour < 10) {
    hour = "0" + hour;
}

hourHTML.innerText = hour;

let minutes = date.getMinutes();

if(minutes < 10) {
    minutes = "0" + minutes;
}


minutesHTML.innerText = minutes;

let seconds = date.getSeconds();

if(seconds < 10) {
    seconds = "0" + seconds;
}

secondsHTML.innerText = seconds;

// console.log("Comenzando Timeout");

// setTimeout(function(){
//     console.log("Función de Timeout ejecutado");
// }, 2000) 

// setTimeout no nos funcionaría porque no se vuelve a ejecutar, solo se ejecuta una vez.

// console.log("Comenzando Intervalo");

// setInterval(function(){
//     console.log("Intervalo ejecutado");
// }, 1000)

setInterval(function(){
    const date = new Date();

    let hour = date.getHours();

    if(hour < 10) {
        hour = "0" + hour;
    }

    hourHTML.innerText = hour;

    let minutes = date.getMinutes();

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    minutesHTML.innerText = minutes;

    let seconds = date.getSeconds();

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    secondsHTML.innerText = seconds;

    const year = date.getFullYear();
    const month = date.getMonth();

    const day = date.getDate();

    const monthName = getMonthName(month);

    const weekDay = date.getDay();

    const dayName = getDayName(weekDay);

    const text = `Hoy es ${dayName}, ${day} de ${monthName} de ${year}`;

    dateHTML.innerText = text;

}, 1000)

function getMonthName(month) {

    const months = [
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
    ];
    // const monthName = months[month];
    return months[month];

    // if(month === 0) {
    //     return "Enero";
    // } else if(month === 1) {
    //     return "Febrero";
    // } else if(month === 2) {
    //     return "Marzo";
    // } else if(month === 3) {
    //     return "Abril";
    // } else if(month === 4) {
    //     return "Mayo";
    // } else if(month === 5) {
    //     return "Junio";
    // } else if(month === 6) {
    //     return "Julio";
    // } else if(month === 7) {
    //     return "Agosto";
    // } else if(month === 8) {
    //     return "Septiembre";
    // } else if(month === 9) {
    //     return "Octubre";
    // } else if(month === 10) {
    //     return "Noviembre";
    // } else if(month === 11) {
    //     return "Diciembre";
    // }

    // switch (month) {
    //     case 0:
    //         return "Enero";
    //     case 1:
    //         return "Febrero";
    //     case 2:
    //         return "Marzo";
    //     case 3:
    //         return "Abril";
    //     case 4:
    //         return "Mayo";
    //     case 5:
    //         return "Junio";
    //     case 6:
    //         return "Julio";
    //     case 7:
    //         return "Agosto";
    //     case 8:
    //         return "Septiembre";
    //     case 9:
    //         return "Octubre";
    //     case 10:
    //         return "Noviembre";
    //     case 11:
    //         return "Diciembre";
    //     default:
    //         return null;
    // }
}

function getDayName(weekDay) {
    const days = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    return days[weekDay];
}