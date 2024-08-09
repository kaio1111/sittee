document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    
    // Alternar animações das barras
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('bar1-active');
    bars[1].classList.toggle('bar2-active');
    bars[2].classList.toggle('bar3-active');
});