document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById('no-button');

    function moveButton() {
        const buttonRect = noButton.getBoundingClientRect();

        // Garantir que o botão não saia da tela
        const maxX = window.innerWidth - buttonRect.width;
        const maxY = window.innerHeight - buttonRect.height;

        // Calcular novas posições aleatórias
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', function(event) {
        event.preventDefault();
        moveButton();
    });

    noButton.addEventListener('touchstart', function(event) {
        event.preventDefault();
        moveButton();
    });
});
