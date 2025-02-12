//eliminar elementos del dom
//cuando se elima un elemento de un carrito no se recarga la pagina
const nave = document.querySelector('.menu');
console.log(nave.children);
//eliminar un elemento por si mismo
const eli = document.querySelector('a');
eli.remove();
//eliminar desde el padre
const pa = document.querySelector('.menu');
pa.removeChild(pa.children[2]);


const enlace = document.querySelector('A');
enlace.textContent = 'Nuevo-enlace';
enlace.href = '/Nuevo-enlace';
console.log(enlace);

const nave1 = document.querySelector('.menu');
nave1.appendChild(enlace);