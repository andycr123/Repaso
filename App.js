/*Intermedio*/
/* 
Ejercicio #1: Documentgetelementbyid: 
  // Obtener el elemento por su ID
  var tituloElemento = document.getElementById("título");
  // Cambiar el contenido del elemento
  tituloElemento.innerHTML = "Nuevo Título";
*/

/* 
Ejercicio #2 = getElementsByTagName()
  // Obtener todos los elementos 'li' dentro del 'ul'
  var listaItems = document.getElementById("lista").getElementsByTagName("li");
  // Iterar sobre los elementos y cambiar su contenido
  for (var i = 0; i < listaItems.length; i++) {
    listaItems[i].innerHTML = "Nuevo Elemento " + (i+1);
  }
*/

/*
Ejercicio #3 = querySelector():
  // Obtener el primer elemento 'p' dentro del div con clase 'contenedor'
  var primerParrafo = document.querySelector(".contenedor p");
  // Cambiar el contenido del párrafo
  primerParrafo.innerHTML = "Nuevo Texto 1";
*/

/* 
Ejercicio #4=  querySelectorAll():
// Obtener todos los elementos 'p' dentro del div con clase 'contenedor'
  var parrafos = document.querySelectorAll(".contenedor p");
  // Iterar sobre los elementos y cambiar su contenido
  parrafos.forEach(function(parrafo, index) {
    parrafo.innerHTML = "Nuevo Texto " + (index + 1);
  });

*/

/*Medios*/
/*Ejercicio #1
function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    // Simular el envío de datos
    console.log("Nombre: " + nombre + ", Email: " + email);
    // Aquí puedes agregar lógica para enviar los datos a un servidor
  }
*/

/*Ejercicio #2
 // Obtener todos los elementos 'li' dentro de 'ul'
  var listaItems = document.querySelectorAll("#lista li");
  // Iterar sobre los elementos y añadir clase para resaltarlos
  listaItems.forEach(function(item) {
    item.classList.add("resaltado");
*/

/*Dificiles*/
/*Ejercicio#1
 function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    
    if (nombre === "") {
      alert("Por favor ingresa tu nombre.");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Por favor ingresa un email válido.");
    } else {
      alert("Formulario válido. Nombre: " + nombre + ", Email: " + email);
      // Aquí puedes agregar lógica para enviar los datos a un servidor
    }
  }
*/

/*Ejercicio #2
 function cambiarEstilos() {
    var parrafo = document.querySelector("#contenedor p");
    parrafo.classList.toggle("cambio-color");
    document.body.classList.toggle("cambio-fondo");
  }
*/
