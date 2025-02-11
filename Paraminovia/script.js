/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const messages = [
        "Te va a ir bien el amor y vas a estar muy feliz 💖",
        "Tu pareja actual te ama muchisimo y no te va soltar nunca ✨",
        "Hay una persona en especial que esta dispuesto a darte lo mejor para que estes bien 🎁",
        "Aunque no lo creas, hay una persona que con solo saber de vos, es muy feliz 💫",
        "El simpre te va a amar a pesar de todas las dificultades y problemas. Te amo con todo mi corazon 💌"
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