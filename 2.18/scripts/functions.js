function calcular() {
    const edadAnios = parseFloat(document.getElementById("num1").value);
    const meses = edadAnios * 12;
    const semanas = edadAnios * 52;
    const dias = edadAnios * 365;
    const horas = dias * 24;
    document.getElementById("resul").textContent =
        "Meses vividos: " + meses.toFixed(0) +
        "\nSemanas vividas: " + semanas.toFixed(0) +
        "\nDias vividos: " + dias.toFixed(0) +
        "\nHoras vividas: " + horas.toFixed(0);
}