function calcular() {
    const consumoKw = parseFloat(document.getElementById("num1").value);
    const costoPorKw = parseFloat(document.getElementById("num2").value);
    const pagoTotal = consumoKw * costoPorKw;
    document.getElementById("resul").textContent = "Pago total: $" + pagoTotal.toFixed(2);
}