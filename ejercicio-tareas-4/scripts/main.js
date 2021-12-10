//Selecciono el formulario
const mainForm = document.querySelector('.js-task-form');

//Selecciono el input del formulario
const inputForm = document.querySelector('.js-task-form input');

//Seleccionar mi contenedor de tareas
const taskList = document.querySelector('.js-task-list');

//Seleccionar el botón que borra todas las tareas
const clearAllTasks = document.querySelector('.js-clear-all');

//Escuchar el evento submit
mainForm.addEventListener(
    'submit', 
    function(eventoSubmit){
        //Guardamos el valor del input
        const inputValue = inputForm.value;

        //Crear el elemento de la tarea
        crearTareaElemento(inputValue);

        //Limpio el value de la caja de texto
        inputForm.value = '';

        //Detenemos el comportamiento por defecto de los forms
        eventoSubmit.preventDefault();
    }
);

//Escuchar el click en el botón clearAll
clearAllTasks.addEventListener(
    'click',
    function(miInfoDelEvento){
        //Borro el innerHTML
        taskList.innerHTML = '';
    }
);

//Creamos una funcion para encapsular la logíca de crear el li
function crearTareaElemento(tarea){
    //Crear un li para luego agregarle el texto del usuario
    const tareaLi = document.createElement('li');

    //Agregamos la clase task al li
    tareaLi.classList.add('task');

    //Crear un span para indicar el texto
    const tareaSpan = document.createElement('span');
    tareaSpan.textContent = tarea;
    
    //Creamos un a pra poder borrarla individualmente
    const tareaA = document.createElement('a');
    tareaA.classList.add('delete-task');

    //Crear un span para el icono del a
    const tareaAIcon = document.createElement('span');
    tareaAIcon.classList.add('icon');

    //Agregamos el span.icon al a
    tareaA.appendChild(tareaAIcon);

    //Agregar el span y el a como hijo del li
    tareaLi.append(
        tareaSpan, 
        tareaA
    );

    //Espero el click en el botón de borrar
    tareaA.addEventListener(
        'click',
        function(event){
            //A que fue clickeado
            const target = event.target;

            //Guardo mi padre li
            const tareaLiPadre = target.parentNode;
            
            //Remover del DOM
            tareaLiPadre.remove();
        }
    );
    
    //Agrego mi li al DOM
    taskList.appendChild(tareaLi);
}


//Creamos las tareas iniciales desde un fetch
const tareasPromise  = fetch('https://jsonplaceholder.typicode.com/users/1/todos');
tareasPromise
    //Si desean entenderlo luego les paso un link
    .then((resp) => resp.json())
    //Ya tengo el listado de tareas
    .then(function(tareas){
        //Iterar las tareas que nos dió el servidor
        //Y creamos un li por cada una
        for (const tareaObj of tareas) {
            //Creo un elemento por cada tarea llamando la función
            crearTareaElemento(tareaObj.title);
        };
    });