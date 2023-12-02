let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    // Si el scroll está hacia abajo, oculta la barra de navegación
    if (prevScrollPos < currentScrollPos) {
        document.getElementById("navbar").style.top = "-80px"; // Cambia 80px a la altura de tu barra de navegación
    } else {
        // Si el scroll está hacia arriba o en la parte superior, muestra la barra de navegación
        document.getElementById("navbar").style.top = "0";
    }

    prevScrollPos = currentScrollPos;
};
