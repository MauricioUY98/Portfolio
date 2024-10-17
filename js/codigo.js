const TextoInicio = document.getElementById('texto-inicio');
const variantes = ['Mauricio de Avila', 'Mauricio98UY'];
let textoIndex = 0;
let caracterIndex = 0;
let velocidadEscritura = 100;
let velocidadBorrado = 50;
let escribir = true;

Inicio();

function Inicio(){
    type();
    OcultarTodo();
    MostrarInicio();
    Eventos();
}

function Eventos(){
    document.querySelector("#aInicio").addEventListener("click", MostrarInicio);
    document.querySelector("#aSobreMi").addEventListener("click", MostrarSobreMi);
    document.querySelector("#aCV").addEventListener("click", MostrarCV);
    document.querySelector("#aPortfolio").addEventListener("click", MostrarPortfolio);
    document.querySelector("#aContacto").addEventListener("click", MostrarContacto);
}

function OcultarTodo(){
    document.querySelector("#Inicio").style.display = "none";
    document.querySelector("#SobreMi").style.display = "none";
    document.querySelector("#CV").style.display = "none";
    document.querySelector("#Portfolio").style.display = "none";
    document.querySelector("#Contacto").style.display = "none";
}

function MostrarInicio(){
    OcultarTodo();
    document.querySelector("#Inicio").style.display = "block";
}

function MostrarSobreMi(){
    OcultarTodo();
    document.querySelector("#SobreMi").style.display = "block";
}

function MostrarCV(){
    OcultarTodo();
    document.querySelector("#CV").style.display = "block";
}

function MostrarPortfolio(){
    OcultarTodo();
    document.querySelector("#Portfolio").style.display = "block";
}

function MostrarContacto(){
    OcultarTodo();
    document.querySelector("#Contacto").style.display = "block";
}

function type() {
    if (escribir) {
        if (caracterIndex < variantes[textoIndex].length) {
            TextoInicio.textContent += variantes[textoIndex].charAt(caracterIndex);
            caracterIndex++;
            setTimeout(type, velocidadEscritura);
        } else {
            escribir = false;
            setTimeout(type, 1000);
        }
    } else {
        if (caracterIndex > 0) {
            TextoInicio.textContent = variantes[textoIndex].substring(0, caracterIndex - 1);
            caracterIndex--;
            setTimeout(type, velocidadBorrado);
        } else {
            escribir = true;
            textoIndex = (textoIndex + 1) % variantes.length;
            setTimeout(type, 500);
        }
    }
}