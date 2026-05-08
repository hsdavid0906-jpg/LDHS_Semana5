function calcular() {
    const dias = parseFloat(document.getElementById("num1").value);
    const hotelDiario = parseFloat(document.getElementById("num2").value);
    const comidaDiaria = parseFloat(document.getElementById("num3").value);
    const totalHotel = dias * hotelDiario;
    const totalComida = dias * comidaDiaria;
    const otrosGastos = dias * 100;
    const totalCheque = totalHotel + totalComida + otrosGastos;
    document.getElementById("resul").textContent =
        "Hotel: $" + totalHotel.toFixed(2) +
        "\nComida: $" + totalComida.toFixed(2) +
        "\nOtros gastos: $" + otrosGastos.toFixed(2) +
        "\nTotal del cheque: $" + totalCheque.toFixed(2);
}