document.getElementById('startAnimation').addEventListener('click', function() {
    document.querySelector('.sky').style.animationPlayState = 'running';
    document.querySelector('.sun').style.animationPlayState = 'running';
    document.querySelector('.car').style.animationPlayState = 'running';
    document.querySelectorAll('.wheel').forEach(wheel => {
        wheel.style.animationPlayState = 'running';
    });
});
