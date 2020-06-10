console.log("Hello world!")

var titulo = document.querySelector(".header-titulo");
titulo.textContent = "Aparecida Nutricionista";

var PesoEhValido = true;
var alturaEhvalida = true;

function validaPeso(peso, element) {
    if (peso.textContent > 300) {
        console.log("Peso inválido");

        PesoEhValido = false;
        element.textContent = "Peso inválido";
        
        peso.classList.add("dado-invalido")
    }
}

function validaAltura(altura, element) {
    if (altura.textContent < 0 || altura.textContent > 3) {
        console.log("Altura inválida");

        alturaEhvalida = false;
        element.textContent = "Altura inválida";

        altura.classList.add("dado-invalido")
    }
}

function calcIMC() {
    var pesos = document.querySelectorAll(".info-peso");
    var alturas = document.querySelectorAll(".info-altura");

    var imcs = document.querySelectorAll(".info-imc");

    for (var i = 0; i < pesos.length; i++) {  
        let peso = pesos[i].textContent
        let altura = alturas[i].textContent

        validaAltura(alturas[i], imcs[i]);
        validaPeso(pesos[i], imcs[i]);

        if (alturaEhvalida && PesoEhValido) {
            imc = peso / altura**2
            imcs[i].textContent = imc.toFixed(2);
        } 

        PesoEhValido = true;
        alturaEhvalida = true;
    }
}

calcIMC();