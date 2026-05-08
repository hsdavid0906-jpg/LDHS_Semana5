function calcular() {
    const dias = parseFloat(document.getElementById("num1").value);
    const costoDia = parseFloat(document.getElementById("num2").value);
    const total = dias * costoDia;
    document.getElementById("resul").textContent = "Cobro total de la estancia: $" + total.toFixed(2);
}