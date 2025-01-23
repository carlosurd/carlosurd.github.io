// Asegurarse de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Cargar imágenes y videos por mes
    const albums = {
        1: ['enero1.jpg', 'enero2.jpg', 'enero3.jpg'],
        2: ['febrero1.jpg', 'febrero2.jpg', 'febrero3.jpg'],
        3: ['marzo1.jpg', 'marzo2.jpg', 'marzo3.jpg'],
        4: ['abril1.jpg', 'abril2.jpg', 'abril3.jpg'],
        5: ['mayo1.jpg', 'mayo2.jpg', 'mayo3.jpg'],
        6: ['junio1.jpg', 'junio2.jpg', 'junio3.jpg'],
        7: ['julio1.jpg', 'julio2.jpg', 'julio3.jpg'],
        8: ['agosto1.jpg', 'agosto2.jpg', 'agosto3.jpg'],
        9: ['septiembre1.jpg', 'septiembre2.jpg', 'septiembre3.jpg'],
        10: ['octubre1.jpg', 'octubre2.jpg', 'octubre3.jpg'],
        11: ['noviembre1.jpg', 'noviembre2.jpg', 'noviembre3.jpg'],
        12: ['diciembre1.jpg', 'diciembre2.jpg', 'diciembre3.jpg' , 'dicvideo1.mp4']
    };

    const albumContainer = document.getElementById('album');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const countdownDate = new Date("2025-03-22").getTime(); // Cambia la fecha a tu evento



    //cuenta regresiva
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
        // Muestra los días restantes
        document.getElementById("timer").innerHTML = days + " días restantes";
    
        // Si la cuenta regresiva ha terminado
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "¡Es hoy!";
        }
    }, 1000);

    // Mostrar imágenes o videos del mes seleccionado
document.querySelectorAll('.months button').forEach(button => {
    button.addEventListener('click', () => {
        const month = parseInt(button.getAttribute('data-month'), 10);
        const media = albums[month] || [];
        albumContainer.innerHTML = media
            .map(file => {
                // Verificar si el archivo es una imagen o un video
                const fileExtension = file.split('.').pop();
                const isVideo = ['mp4', 'avi', 'mov', 'webm'].includes(fileExtension);

                if (isVideo) {
                    // Si es un video, crear un elemento de video
                    return `<video src="images/${file}" class="media" data-src="images/${file}"></video>`;
                } else {
                    // Si es una imagen, crear un elemento de imagen
                    return `<img src="images/${file}" alt="${file}" class="media" data-src="images/${file}">`;
                }
            })
            .join('');

        // Añadir event listeners para las imágenes y videos
        document.querySelectorAll('.media').forEach(element => {
            element.addEventListener('click', (e) => {
                openModal(e.target.getAttribute('data-src'));
            });
        });
    });
});

// Abrir el modal con la imagen o video seleccionado
function openModal(src) {
    modal.style.display = 'flex';
    
    const fileExtension = src.split('.').pop();
    const isVideo = ['mp4', 'avi', 'mov', 'webm'].includes(fileExtension);

    if (isVideo) {
        // Si es un video, cargar el elemento de video
        modalContent.innerHTML = `<video src="${src}" class="modal-media" controls autoplay></video>`;
    } else {
        // Si es una imagen, cargar el elemento de imagen
        modalContent.innerHTML = `<img src="${src}" class="modal-media">`;
    }

    // Ajustar el tamaño del contenido en el modal
    const modalMedia = modalContent.querySelector('.modal-media');
    if (modalMedia) {
        modalMedia.style.maxWidth = '55%';
        modalMedia.style.maxHeight = '55%';
        modalMedia.style.objectFit = 'contain';  // Esto asegurará que la imagen o video se ajusten al tamaño sin distorsión
    }
}

// Cerrar el modal al hacer clic en el botón de cerrar
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.innerHTML = ''; // Limpiar contenido
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalContent.innerHTML = ''; // Limpiar contenido
    }
});
});