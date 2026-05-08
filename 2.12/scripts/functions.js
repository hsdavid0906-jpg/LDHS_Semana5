function calcular() {
    const precioOriginal = parseFloat(document.getElementById("num1").value);
    const precioConDescuento = precioOriginal * 0.8;
    const precioFinal = precioConDescuento * 1.15;
    document.getElementById("resul").textContent =
        "Precio con descuento (20%): $" + precioConDescuento.toFixed(2) +
        "\nPrecio final con IVA (15%): $" + precioFinal.toFixed(2);
}