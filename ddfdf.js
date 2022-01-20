p = document.getElementById("eee")
inpt1 = document.getElementById("inpt1")
inpt2 = document.getElementById("inpt2")
opis = ["Zwraca długość stringa", "Zwraca znak na danej pozycji", "Zwraca kod ASCII znaku na danej pozycji", "Zamienia tekst na wielkie litery", "Zamienia tekst na małe litery", "Wypisuje numer indexu danego znaku, zaczynając od początku", "Wypisuje numer indexu danego znaku, zaczynając od końca", "Wyciąga kawałek tekstu", "To co substr ale lepiej", "Bierze wycięty kawałek tekstu", "Dzieli po wybranych rzeczach", "Zamienie dany kawałek tekstu na rzecz"]

// for (i = 1; i <= 12; i++) {
//     id1 = "btn" + i
//     f = "f"
//     document.getElementById(id1).onclick = function () { aaaaaa
//         window[f + i]();
//         zmien_opis(i)
//     }
//}

document.getElementById("btn1").addEventListener("click", f_1)
document.getElementById("btn2").addEventListener("click", f_2)
document.getElementById("btn3").addEventListener("click", f_3)
document.getElementById("btn4").addEventListener("click", f_4)
document.getElementById("btn5").addEventListener("click", f_5)
document.getElementById("btn6").addEventListener("click", f_6)
document.getElementById("btn7").addEventListener("click", f_7)
document.getElementById("btn8").addEventListener("click", f_8)
document.getElementById("btn9").addEventListener("click", f_9)
document.getElementById("btn10").addEventListener("click", f_10)
document.getElementById("btn11").addEventListener("click", f_11)
document.getElementById("btn12").addEventListener("click", f_12)

function argumenty(x) {
    x = x.split(",")
    return x;
}
function zmien_opis(i) {
    document.getElementById("opiz").innerHTML = "<h2>Opis here</h2>" + opis[i - 1]
}
function f_1() {
    p.innerText = inpt1.value.length - 1
    zmien_opis(1)
    return;
}
function f_2() {
    p.innerText = inpt1.value.charAt(inpt2.value - 1)
    zmien_opis(2)
    return;
}
function f_3() {
    p.innerText = inpt1.value.charCodeAt(inpt2.value - 1)
    zmien_opis(3)
    return;
}
function f_4() {
    p.innerText = inpt1.value.toUpperCase()
    zmien_opis(4)
    return;
}
function f_5() {
    p.innerText = inpt1.value.toLowerCase()
    zmien_opis(5)
    return;
}
function f_6() {
    p.innerText = inpt1.value.indexOf(inpt2.value) + 1
    zmien_opis(6)
    return;
}
function f_7() {
    p.innerText = inpt1.value.lastIndexOf(inpt2.value) + 1
    zmien_opis(7)
    return;
}
function f_8() {
    p.innerText = inpt1.value.substr(inpt2.value)
    zmien_opis(8)
    return;
}
function f_9() {
    p.innerText = inpt1.value.substring(inpt2.value)
    zmien_opis(9)
    return;
}
function f_10() {
    p.innerText = inpt1.value.slice(argumenty(inpt2.value)[0] - 1, argumenty(inpt2.value)[1])
    zmien_opis(10)
    return;
}
function f_11() {
    p.innerText = inpt1.value.split(inpt2.value)
    zmien_opis(11)
    return;
}
function f_12() {
    p.innerText = inpt1.value.replace(argumenty(inpt2.value)[0], argumenty(inpt2.value)[1])
    zmien_opis(12)
    return;
}










