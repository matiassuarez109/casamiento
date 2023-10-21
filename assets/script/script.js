function updateCountdown() {
    const weddingDate = new Date('2024-08-10T21:00:00').getTime();
    const currentDate = new Date().getTime();
    const timeLeft = weddingDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days + 'd';
    document.getElementById('hours').textContent = hours + 'h';
    document.getElementById('minutes').textContent = minutes + 'm';
    document.getElementById('seconds').textContent = seconds + 's';

    if (timeLeft < 0) {
        document.querySelector('.countdown').style.display = 'none'; // Oculta el temporizador cuando la boda ha pasado
    }
}

setInterval(updateCountdown, 1000);
