const celsiusMedidorDeGrau = document.getElementById("grau2");
const fahrenheitMedidorDeGrau = document.getElementById("grau1");

fahrenheitMedidorDeGrau.addEventListener("input", function() {
  var grau1 = fahrenheitMedidorDeGrau.value;
  var celsius = parseFloat(grau1);

  if (isNaN(celsius)) {
    celsiusMedidorDeGrau.value = "";
    return;
  }

  var fahrenheit = (celsius * 9/5) + 32;

  celsiusMedidorDeGrau.value = fahrenheit;
});

celsiusMedidorDeGrau.addEventListener("input", function() {
  var grau2 = celsiusMedidorDeGrau.value;
  var fahrenheit = parseFloat(grau2);

  if (isNaN(fahrenheit)) {
    fahrenheitMedidorDeGrau.value = ""; // Correção aqui
    return;
  }

  var celsius = (fahrenheit - 32) * 5/9;

  fahrenheitMedidorDeGrau.value = celsius; // Correção aqui
});
