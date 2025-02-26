const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Abrir/cerrar menú móvil
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Bloquear el scroll del body cuando el menú está abierto
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Cerrar menú al hacer clic en un enlace (opcional)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let activeSketch = null;

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        // Detener el sketch anterior
        if (activeSketch) {
            activeSketch.remove();
            activeSketch = null;
        }

        // Obtener el contenedor y el identificador del sketch
        const container = this.querySelector('.sketch-container');
        const sketchId = this.dataset.sketch;

        // Inicializar el sketch correspondiente
        switch(sketchId) {
            case 'sketch1':
                activeSketch = new p5(sketch1, container);
                break;
            case 'sketch2':
                activeSketch = new p5(sketch2, container);
                break;
        }
    });
});