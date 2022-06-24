
let ele = document.getElementById("ele1");
ele.style.backgroundColor = "green"
ele.addEventListener("click", function () {
    pintar(ele)
});

function pintar(elemento, color="yellow") {
        elemento.style.backgroundColor = color;
}


