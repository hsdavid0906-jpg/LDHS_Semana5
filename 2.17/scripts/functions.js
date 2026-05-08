function calcular() {
    const ex1 = parseFloat(document.getElementById("num1").value);
    const ex2 = parseFloat(document.getElementById("num2").value);
    const ex3 = parseFloat(document.getElementById("num3").value);
    const promedio = ex1 * 0.25 + ex2 * 0.25 + ex3 * 0.5;
    document.getElementById("resul").textContent = "Promedio final: " + promedio.toFixed(2);
}