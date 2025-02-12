//Las mismas propiedades que se encuentran en css se encuentra en javascript

const enca = document.querySelector('.contenedor h2');
//console.log(enca.style);
enca.style.backgroundColor = 'red';
enca.style.fontFamily = 'Arial';
enca.style.textTransform = 'uppercase';

const conte = document.querySelector('.contenedor');
conte.classList.add('nueva-clase');
console.log(conte.classList);