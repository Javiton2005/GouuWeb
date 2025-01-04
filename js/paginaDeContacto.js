document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const fields = ['nombre', 'apellidos', 'email', 'telefono'];
    
    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorMessage = input.nextElementSibling.nextElementSibling;
        
        // Limpiar estado anterior
        input.classList.remove('contact-error');
        errorMessage.style.display = 'none';

        // Validar campos
        if (field === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('contact-error');
                errorMessage.style.display = 'block';
                isValid = false;
            }
        } else if (field === 'telefono') {
            const phoneRegex = /^\d{9}$/;
            if (!phoneRegex.test(input.value)) {
                input.classList.add('contact-error');
                errorMessage.style.display = 'block';
                isValid = false;
            }
        } else if (input.value.trim() === '') {
            input.classList.add('contact-error');
            errorMessage.style.display = 'block';
            isValid = false;
        }
    });

    if (isValid) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(new FormData(this)))
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    }
});