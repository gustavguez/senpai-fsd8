//Selecciono el formulario
const mainForm = document.querySelector('.js-task-form');

//Selecciono el input del formulario
const inputForm = document.querySelector('.js-task-form input');

//Seleccionar mi contenedor de tareas
const taskList = document.querySelector('.js-task-list');

//Escuchar el evento submit
mainForm.addEventListener('submit', function(event){
    //Guardamos el valor del input
    const inputValue = inputForm.value;

    //Controlar que no esté vacío
    if(inputValue != ''){
        //Crear un li para luego agregarle el texto del usuario
        const tareaLi = document.createElement('li');
        tareaLi.textContent = inputValue;
        
        //Agrego mi li al DOM
        taskList.appendChild(tareaLi);
    }

    //Detenemos el comportamiento por defecto de los forms
    event.preventDefault();
});