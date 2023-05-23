function temperatureConverter() {
  var celsiusValue = parseInt(document.getElementById(`takeCelsius`).value);
  var fahrenheitValue = celsiusValue * (9 / 5) + 32;
  document.getElementById(`result`).textContent =
    `Fahrenheit value is` + " " + fahrenheitValue;
}
