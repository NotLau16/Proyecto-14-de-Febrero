/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    console.log("Total de cartas:", cards.length);
    const messages = [
        "Te va a ir bien en el amor y vas a estar muy feliz 💖",
        "Tu pareja actual te ama muchísimo y no te va soltar nunca ✨",
        "Hay una persona en especial que esta dispuesta a darte lo mejor para que estes bien 🎁",
        "Aunque no lo creas, tenes a alguien que te quiere ver triunfar en todo y es muy feliz a tu lado 💫",
        "Tus ojos y tu sonrisa ilumina la vida de alguien más, no lo olvides nunca 😊",
        "El destino tiene grandes sorpresas para vos, solo tenés que confiar y seguir 💕",
        "Siempre te voy a amar a pesar de todas las dificultades y problemas. Te amo con todo mi corazon 💌"
        ];

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('flip')) return;
            card.querySelector('.back').textContent = messages[index];
            card.classList.add('flip');
            if (index === messages.length - 1) {
                setTimeout(() => { alert("¡Feliz 14 de Febrero y día de San Valentín! ❤️"); }, 800);
            }
        });
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '🌸';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.querySelector('.heart-rain').appendChild(heart);
        setTimeout(() => { heart.remove(); }, 4000);
    }

    setInterval(createHeart, 300);
});