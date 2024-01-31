import { calcularPasos } from "./setOne.js";

const ingresa = document.getElementById("ingresa");
ingresa.addEventListener("click", () => {
  const tamanoInput = document.getElementById("tamano");
  const valoresContainer = document.getElementById("valoresContainer");
  const valoresLista = document.getElementById("valoresLista");


  const tamano = parseInt(tamanoInput.value);
  if (isNaN(tamano) || tamano < 1) {
    alert("Por favor, ingrese un valor válido para el tamaño.");
  }
  valoresContainer.style.display = "block";
  valoresLista.innerHTML = "";
  for (let i = 0; i < tamano; i++) {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "number";
    li.appendChild(input);
    valoresLista.appendChild(li);
    }

});

// AQUI CALCULALOS PASOS
const calcula = document.getElementById("calcula");
calcula.addEventListener("click", () => {
  const elementosArreglo = document.getElementById("valoresLista").querySelectorAll("li input");
  const resultadopasos = document.getElementById("resultadoPasos");
  let pasos = calcularPasos(elementosArreglo);
  resultadopasos.textContent = `Número de pasos para que sea 1: ${pasos}`;
});
