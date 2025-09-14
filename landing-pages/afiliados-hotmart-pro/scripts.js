// Espera a que el documento esté completamente cargado
$(document).ready(function() {
    
    // Contador regresivo
    const countdownEl = $('#countdown');
    // Suma 24 horas a la fecha actual
    const endDate = new Date().getTime() + (24 * 60 * 60 * 1000); 

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra el tiempo restante en el elemento con id 'countdown'
        countdownEl.html(`${hours}h ${minutes}m ${seconds}s`);

        // Si la cuenta regresiva termina, detén el temporizador y muestra un mensaje
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownEl.html('¡Oferta finalizada!');
        }
    }, 1000);

    // Funcionalidad para las preguntas frecuentes (FAQ)
    $('.faq-item h4').on('click', function() {
        // Busca el siguiente elemento con la clase '.faq-answer' y lo muestra/oculta con un efecto de deslizamiento
        $(this).next('.faq-answer').slideToggle();
    });
});