document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    
    // Crear el div de bloqueo
    const blockDiv = document.createElement('div');
    blockDiv.className = 'cookie-block';
    document.body.appendChild(blockDiv);

    // Comprobar si las cookies ya fueron aceptadas
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
        blockDiv.style.display = 'block';
        
        // Prevenir el scroll
        document.body.style.overflow = 'hidden';
    }

    // Evento para el botón de aceptar
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
        blockDiv.style.display = 'none';
        
        // Restaurar el scroll
        document.body.style.overflow = 'auto';
    });
});