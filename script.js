document.addEventListener('DOMContentLoaded', () => {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        const delay = balloon.style.getPropertyValue('--delay');
        balloon.style.animationDelay = delay;
    });
});
