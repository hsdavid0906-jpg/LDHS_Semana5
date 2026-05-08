function calcular() {
    const lado = parseFloat(document.getElementById("num1").value);
    const area = lado * lado;
    document.getElementById("resul").textContent = "Area del cuadrado: " + area.toFixed(2) + " u²";
}