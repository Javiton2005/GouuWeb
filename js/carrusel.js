document.addEventListener('DOMContentLoaded', function() {
   const carousel = document.querySelector('.carousel');
   const slides = document.querySelectorAll('.slide');
   const dots = document.querySelectorAll('.dot');
   const prevBtn = document.querySelector('#prevBtn');
   const nextBtn = document.querySelector('#nextBtn');

   let currentIndex = 0;
   let interval;

   // Función para actualizar el carrusel
   function updateCarousel(index) {
       currentIndex = index; // Añadimos esta línea
       carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
       
       // Actualizar dots
       dots.forEach((dot, idx) => {
           dot.classList.toggle('active', idx === currentIndex);
       });
   }

   // Ir a la siguiente imagen
   function nextSlide() {
       let newIndex = (currentIndex + 1) % slides.length;
       updateCarousel(newIndex);
   }

   // Ir a la imagen anterior
   function prevSlide() {
       let newIndex = (currentIndex - 1 + slides.length) % slides.length;
       updateCarousel(newIndex);
   }

   // Event listeners para los botones
   nextBtn.addEventListener('click', () => {
       nextSlide();
       resetInterval();
   });

   prevBtn.addEventListener('click', () => {
       prevSlide();
       resetInterval();
   });

   // Event listeners para los dots
   dots.forEach((dot, index) => {
       dot.addEventListener('click', () => {
           updateCarousel(index);
           resetInterval();
       });
   });

   // Auto-play
   function startInterval() {
       interval = setInterval(nextSlide, 3000);
   }

   function resetInterval() {
       clearInterval(interval);
       startInterval();
   }

   // Inicializar el carrusel explícitamente
   updateCarousel(0); // Añadimos esta línea para inicializar

   // Iniciar auto-play
   startInterval();

   // Pausar auto-play cuando el mouse está sobre el carrusel
   carousel.addEventListener('mouseenter', () => clearInterval(interval));
   carousel.addEventListener('mouseleave', startInterval);
});