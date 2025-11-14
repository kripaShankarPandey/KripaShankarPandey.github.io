const REDIRECT_URL = 'https://kripa-pandey.vercel.app/';
const REDIRECT_DELAY = 5;

let timeLeft = REDIRECT_DELAY;
const countdownElement = document.getElementById('countdown');
const progressBar = document.getElementById('progressBar');

function updateCountdown() {
    countdownElement.textContent = timeLeft;
    
    const progress = ((REDIRECT_DELAY - timeLeft) / REDIRECT_DELAY) * 100;
    progressBar.style.width = `${progress}%`;
    
    if (timeLeft <= 0) {
        window.location.href = REDIRECT_URL;
        return;
    }
    
    timeLeft--;
    setTimeout(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
});
