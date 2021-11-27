function editarTarea(){
    alert('Me estas editando')
}

//Selecciono los botones
const editButtons = document.querySelectorAll('.tarea .js-edit');

// //Itero cada botón
for (const editButton of editButtons) {
    //Le agrego el listener
    editButton.addEventListener('click', editarTarea);
}