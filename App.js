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