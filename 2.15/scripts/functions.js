function calcular() {
    const resistencia = parseFloat(document.getElementById("num1").value);
    const corriente = parseFloat(document.getElementById("num2").value);
    const voltaje = resistencia * corriente;
    const potencia = voltaje * corriente;
    document.getElementById("resul").textContent =
        "Voltaje (V = R*I): " + voltaje.toFixed(2) + " V" +
        "\nPotencia (P = V*I): " + potencia.toFixed(2) + " W";
}