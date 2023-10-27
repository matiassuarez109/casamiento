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


//dark mode

const darkbtn = document.getElementById('darkbtn');
const body = document.body;

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
    darkbtn.checked = true;
}

darkbtn.addEventListener('change', () => {
    if (darkbtn.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

//go top
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
        .classList.add('show')
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show')
    }
}

document.querySelector('.go-top-container')
.addEventListener('click',() =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});