const gatos = document.querySelectorAll('.gato');

// Función para cambiar el color de fondo de las secciones de gatos al hacer clic en ellas
function cambiarColorDeFondo(event) {
    const seccionGato = event.currentTarget;
    const colores = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#F600FE', '#00FEE3 '];

    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    seccionGato.style.backgroundColor = nuevoColor;
}

gatos.forEach((gato) => {
    gato.addEventListener('click', cambiarColorDeFondo);
});
