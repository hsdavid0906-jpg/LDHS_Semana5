//declaro una funcion de nombre sumar sin parametros
function sumar(){
    //vinculador let
    //num1 nombre de la variable
    //parseFloat vamos a convertir a numero decimal
    let metros=parseFloat(document.getElementById("metros").value);
    let valor=parseFloat(document.getElementById("valor").value);
    const result=(metros*valor);
    document.getElementById("resul").textContent="El resultado es: "+ result;
};