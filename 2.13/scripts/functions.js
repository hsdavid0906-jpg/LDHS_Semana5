function calcular() {
    const sueldoSemanal = parseFloat(document.getElementById("num1").value);
    const ahorroSemanal = sueldoSemanal * 0.15;
    const ahorroAnual = ahorroSemanal * 4 * 12;
    document.getElementById("resul").textContent = "Ahorro anual aproximado: $" + ahorroAnual.toFixed(2);
}