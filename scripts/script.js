// Funcion Biografia
function toggleRead() {
    var leerMasContentElement = document.getElementById("leer-mas");
    var leerMasBoton = document.getElementById("btn-leer-mas")
    if (leerMasContentElement.style.display === "block") {
        leerMasContentElement.style.display = "none";
        leerMasBoton.textContent = "Leer más...";
    } else {
        leerMasContentElement.style.display = "block";
        leerMasBoton.textContent = "Leer menos...";

    }
}
// Funcion Galeria
function mostrarCategoria(type) {
    var familiaElement = document.getElementById("familia");
    var trabajoElement = document.getElementById("trabajo");
    var hobbiesElement = document.getElementById("hobbies");

    var btnFamiliaElement = document.getElementById("boton-familia");
    var btnTrabajoElement = document.getElementById("boton-trabajo");
    var btnHobbiesElement = document.getElementById("boton-hobbies");
    
    switch (type) {
        case "trabajo":
            console.log (type)
            familiaElement.style.display = "none";
            hobbiesElement.style.display = "none";
            trabajoElement.style.display = "block";

            btnTrabajoElement.style.backgroundColor = "#bb837a";
            btnHobbiesElement.style.backgroundColor = "#dab7b2";
            btnFamiliaElement.style.backgroundColor = "#dab7b2";
            break;
        case "hobbies":
            console.log (type)
            familiaElement.style.display = "none";
            trabajoElement.style.display = "none";
            hobbiesElement.style.display = "block";

            btnHobbiesElement.style.backgroundColor = "#bb837a";
            btnTrabajoElement.style.backgroundColor = "#dab7b2";
            btnFamiliaElement.style.backgroundColor = "#dab7b2";
            break;
        default:
            console.log (type)
            trabajoElement.style.display = "none";
            hobbiesElement.style.display = "none";
            familiaElement.style.display = "block";

            btnHobbiesElement.style.backgroundColor = "#dab7b2";
            btnTrabajoElement.style.backgroundColor = "#dab7b2";
            btnFamiliaElement.style.backgroundColor = "#bb837a";
            break;
    }
}



