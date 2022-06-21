
let verificador = true;
let ele = document.getElementById("ele1")
ele.style.backgroundColor = 'green';

ele.addEventListener("click", function pintar(color = "yellow") {

    if (color = "yellow" && verificador === true) {
        ele.style.backgroundColor = "green";
        verificador = false;
    }
    else {
        ele.style.backgroundColor = "yellow";
        verificador = true;
    }
});
