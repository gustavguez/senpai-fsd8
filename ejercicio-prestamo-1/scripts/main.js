//Selecciono el botón calcular
const calcularBtn = document.querySelector('#calcular-btn');

//Selecciono el input de monto
const inputMontoElement = document.querySelector('.js-monto');

//Selecciono el input de monto
const inputCuotasElement = document.querySelector('.js-cuotas');

//Selecciono el <p> para mostrar el resultado
const valorCuotaElement = document.querySelector('.js-valor-cuota');

//Agrego el escucha
calcularBtn.addEventListener('click', function(){
    //Obtener el valor del monto
    const monto = inputMontoElement.value;

    //Obtener el valor de las cuotas
    const cuotas = inputCuotasElement.value;

    //Calcular monto cuota
    const valorCuota = monto / cuotas;
    
    //Ponemos el resultado en el p
    valorCuotaElement.textContent = '$U' + valorCuota;
});