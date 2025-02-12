const flotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

flotante.addEventListener('click', OcultarFooter);


function OcultarFooter() {
	 if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'redes sociales';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}