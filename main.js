const a_01 = document.getElementById("id_04");
const a_02 = document.getElementById("id_02");
let a_03 = true;
a_01.addEventListener("click", e => {
    if (a_03) {
        a_02.innerText = "Hello";
        a_03 = false;
    } else {
        a_02.innerText = "";
        a_03 = true;
    }
});

const a_04 = document.getElementById("id_08");
const a_05 = document.getElementById("id_06");
const a_07 = document.getElementById("id_05");
a_04.addEventListener("click", e => {
    const a_06 = parseInt(a_05.value);
    if (a_06 < 999) { 
        a_07.innerText = a_06.toString(16);
    }
});