const largeImage = document.getElementById('gallery');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

function showImage(index) {
    largeImage.src = thumbnails[index].src;
    currentIndex = index;
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showImage(index);
    });
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    showImage(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showImage(currentIndex);
});



// Inicializa EmailJS con tu User ID
(function() {
    emailjs.init('02N9JCsqS5B6-9qAd'); // Reemplaza "YOUR_USER_ID" con tu User ID de EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Muestra un mensaje de carga o realiza alguna acción antes de enviar
    const button = event.target.querySelector('button');
    button.disabled = true;
    button.textContent = "Enviando...";

    // Obtén los valores del formulario
    const templateParams = {
        from_name: document.getElementById('nombre').value,
        from_email: document.getElementById('correo electronico').value,
        message: document.getElementById('mensaje').value,
    };

    // Enviar el formulario usando EmailJS
    emailjs.send('service_y4ljzjh', 'template_tg20upn', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Mensaje enviado correctamente!");
            button.disabled = false;
            button.textContent = "Enviar";
        }, function(error) {
            console.log('FAILED...', error);
            alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
            button.disabled = false;
            button.textContent = "Enviar";
        });
});
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = '02N9JCsqS5B6-9qAd';
   const templateID = 'template_tg20upn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
   
  
    
    