export function calcularPasos(elementosArreglo) {
  // aqui calculo el número de pasos necesarios para que el producto sea 1 solo
  let pasos = 0;

  for (let i = 0; i < elementosArreglo.length; i++) {
    let valorActual = parseInt(elementosArreglo[i].value);


    if (valorActual < 0) {
      pasos += Math.abs(valorActual + 1);
    } else if (valorActual > 0) {
      pasos += valorActual - 1;
    } else if (valorActual === 0) {
      pasos += 1;
    }
  }
  return pasos
}