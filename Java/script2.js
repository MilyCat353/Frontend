function converterTemperatura() {
    let temperaturaCelsius = parseFloat(document.getElementById(temperaturaC).value);
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    alert('A temperatura em fahrenheit é: ${temperaturaFarenheit.toFixed(2)}');
}