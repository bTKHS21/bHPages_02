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