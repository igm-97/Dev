// Control del Menú Móvil
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Cerrar menú al hacer clic en enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

// Control de Sketches p5.js
let activeSketch = null;

document.querySelectorAll('.project-item').forEach(project => {
    project.addEventListener('click', function() {
        if (activeSketch) {
            activeSketch.remove();
            activeSketch = null;
        }
        
        const sketchId = this.dataset.sketch;
        const container = this.querySelector('.sketch-container');
        
        switch(sketchId) {
            case 'fluir-cosmico':
                activeSketch = new p5(fluirCosmico, container);
                break;
            case 'ecos-silencio':
                activeSketch = new p5(ecosSilencio, container);
                break;
            case 'laberintos-luminosos':
                activeSketch = new p5(laberintosLuminosos, container);
                break;
        }
    });
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Ejemplo de Sketch p5.js (debes implementar los demás)
function fluirCosmico(p) {
    p.setup = () => {
        let canvas = p.createCanvas(300, 250);
        canvas.parent(p.currentSketch);
        p.noStroke();
    };

    p.draw = () => {
        p.background(255);
        p.fill(p.random(150, 255), p.random(150, 255), p.random(150, 255));
        p.ellipse(p.mouseX, p.mouseY, 50);
    };
}