 //Selecciono los botones
 const obtenerBtn = document.querySelector('.js-obtener')
 const agregarBtn = document.querySelector('.js-agregar')

 //Escucho el click
 obtenerBtn.addEventListener('click', function(){
     console.log('Obtener');
 });

 agregarBtn.addEventListener('click', function(){
    console.log('Obtener');
});

// const tareasPromise  = fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
//     method: 'GET'
// });
// tareasPromise
//     //Si desean entenderlo luego les paso un link
//     .then((resp) => resp.json())
//     //Ya tengo el listado de tareas
//     .then(function(tareas){
//         console.log(tareas)
//     });

// document.querySelector('#form').addEventListener('submit', function(event){
//     event.preventDefault();
//     const data = formDataToJSON(this);
    
//     fetch('http://localhost:3000/tareas', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
// });
// ​
// function formDataToJSON(FormElement){    
//     var formData = new FormData(FormElement);
//     var json = {};
//     for (const [key, value]  of formData.entries())
//     {
//         json[key] = value;
//     }
// ​
//     return json
// }