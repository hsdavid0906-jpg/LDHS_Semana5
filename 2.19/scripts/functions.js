function calcular() {
    const minutos = parseFloat(document.getElementById("num1").value);
    const costoMinuto = parseFloat(document.getElementById("num2").value);
    const costoTotal = minutos * costoMinuto;
    document.getElementById("resul").textContent = "Costo total de la llamada: $" + costoTotal.toFixed(2);
}