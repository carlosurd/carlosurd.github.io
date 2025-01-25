document.addEventListener('DOMContentLoaded', function () {
    const albumContainer = document.getElementById('album');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const modalClose = document.getElementById('modal-close');
    const audioPlayer = document.getElementById('audioPlayer');
    const playlistButtons = document.querySelectorAll('#playlist button');
    const countdownDate = new Date("2025-03-22T00:01:45").getTime();

    // Imágenes por mes
    const albums = {
                1: ['enero1.jpg', 'enero2.jpg', 'enero3.jpg'],
        2: ['febrero1.jpg', 'febrero2.jpg', 'febrero3.jpg'],
        3: ['marzo1.jpg', 'marzo2.jpg', 'marzo3.jpg'],
        4: ['abril1.jpg', 'abril2.jpg', 'abril3.jpg'],
        5: ['mayo1.jpg', 'mayo2.jpg', 'mayo3.jpg'],
        6: ['junio1.mp4', 'junio2.mp4', 'junio3.jpg'],
        7: ['julio1.jpg', 'julio2.jpg', 'julio3.jpg'],
        8: ['agosto1.jpg', 'agosto2.mp4', 'agosto3.jpg'],
        9: ['septiembre.jpg','septiembre1.jpg',  'septiembre2.jpg', 'septiembre3.jpg'],
        10: ['octubre1.jpg', 'octubre2.mp4', 'octubre3.mp4'],
        11: ['noviembre1.jpg', 'noviembre2.jpg', 'noviembre3.jpg'],
        12: ['diciembre.jpg', 'diciembre1.jpg' , 'diciembre2.jpg', 'dicvideo1.mp4']
    };

    // Cargar álbum por mes
    document.querySelectorAll('.months button').forEach(button => {
        button.addEventListener('click', () => {
            const month = parseInt(button.getAttribute('data-month'), 10);
            const media = albums[month] || [];
            albumContainer.innerHTML = media
                .map(file => {
                    const fileExtension = file.split('.').pop();
                    const isVideo = ['mp4', 'avi', 'mov', 'webm'].includes(fileExtension);
                    return isVideo
                        ? `<video src="images/${file}" class="media" controls></video>`
                        : `<img src="images/${file}" alt="${file}" class="media">`;
                })
                .join('');

            // Agregar eventos a las imágenes y videos para abrir modal
            document.querySelectorAll('.media').forEach(mediaElement => {
                mediaElement.addEventListener('click', () => {
                    const isVideo = mediaElement.tagName === 'VIDEO';
                    if (isVideo) {
                        modalImage.style.display = 'none';
                        modalVideo.style.display = 'block';
                        modalVideo.src = mediaElement.src;
                    } else {
                        modalVideo.style.display = 'none';
                        modalImage.style.display = 'block';
                        modalImage.src = mediaElement.src;
                    }
                    modal.style.display = 'flex';
                });
            });
        });
    });

    // Cerrar modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImage.src = '';
        modalVideo.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImage.src = '';
            modalVideo.src = '';
        }
    });

   // Seleccionamos el reproductor de audio

// Añadimos un evento de clic a cada botón con la clase song-button
document.querySelectorAll('.song-button').forEach(button => {
    button.addEventListener('click', () => {
        const songSrc = button.getAttribute('data-src'); // Obtenemos el atributo data-src
        audioPlayer.src = songSrc; // Asignamos la canción al reproductor
        audioPlayer.play(); // Reproducimos la canción
    });
});

    // Cuenta regresiva
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        } else {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "¡Es hoy! ❤️";
        }
    }, 1000);
});









        
