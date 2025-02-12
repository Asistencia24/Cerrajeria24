//Crear nuevos elementos

const enlace = document.createElement('A');
enlace.textContent = 'Nuevo-enlace';
enlace.href='/nuevo-enlace';
console.log(enlace);
const navegacion = document.querySelector('.menu');
//navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);