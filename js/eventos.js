// Cuando visitamos un sitio o aplicación web, existen una gran cantidad de eventos que pasan...

// Cuando te gusta un tweet o das retweet.

// Cuando le das me gusta o compartir a una publicación de Facebook

// Cuando navegas entre los diferentes productos de amazon, todos estos son eventos que ocurren.

// Al llenar un formulario de airbnb y ver la galería de fotos también son eventos..


// Todos los eventos utilizan el método en el document de addEventListener, este registra un evento en especifico, como puede ser un click en un enlace o imagen, submit a un formulario, o cuando el usuario escribe...

// Por lo tanto la sintaaxis es de las sig forma...

// document.addEventListener

// Seguido del evento que estamos escuchando...

// Uno que es muy común y utilizaras en todos tus proyectos es uno llamado DOMC


document.addEventListener('DOMContentLoaded', () => {
        console.log('documento listo');
    }) // Nota todos los eventos que hay disponible);

//eventos que ocurren con el mouse

const nav = document.querySelector('.menu');
nav.addEventListener('click', () => {
    console.log('entrando a navegacion')

    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo del menu')

    nav.style.backgroundColor = 'transparent';
});
// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
// 