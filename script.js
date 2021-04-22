

var randomNum = [];
var numeriUtente = [];
var numeriIndovinati = [];

var numeriInseriti = 5;


while (randomNum.length < numeriInseriti) {
    var numeroComputer = numeroRandom();
    if (randomNum.indexOf(numeroComputer) === -1) {
        randomNum.push(numeroComputer)
    }
}


alert("Ecco i numeri da ricordare: " + randomNum.join(", "));


var timerStart = 0
var timerCountdown = setInterval(function(){
    timerStart++
    document.getElementById("countdown").innerHTML = "Hai ancora " + (30 - timerStart);
}, 1000)


if (timerStart === 30) {
    clearInterval(timerCountdown);
}

setTimeout(game, 30000);




function numeroRandom() {
    var numero = Math.ceil(Math.random() * 100);
    return numero
}

function game() {
    while (numeriUtente.length < numeriInseriti) {
        var numeroInput = parseInt(prompt("Inserisci il " + (numeriUtente.length + 1) + "° numero"));
        pushNumberChecked(numeroInput);
    }

    if (numeriIndovinati.length > 0) {
        alert("Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati.join(" - "))
    } else {
        alert("Non hai indovinato nessun numero. Ricomincia")
    }
}

function pushNumberChecked(number) {
    if (isNaN(number)) {
        alert("Hai inserito un numero non valido");
    } else if (numeriUtente.indexOf(number) > -1) {
        alert("Hai gia inserito questo numero");
    } else {
        numeriUtente.push(number);
        if (randomNum.includes(number)) {
            numeriIndovinati.push(number)
        }
    }
}
