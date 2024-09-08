const typed = new Typed('.multiple-text', {
    strings: [ 'Justdhif', 'Frontend', 'Gamer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const htmlBtn = document.getElementById('html');
const cssBtn = document.getElementById('css');

htmlBtn.addEventListener('click', () => {
    document.getElementById('html_content').style.display = 'flex';
    document.getElementById('css_content').style.display = 'none';

    htmlBtn.classList.add('active');
    cssBtn.classList.remove('active');
})

cssBtn.addEventListener('click', () => {
    document.getElementById('html_content').style.display = 'none';
    document.getElementById('css_content').style.display = 'flex';

    htmlBtn.classList.remove('active');
    cssBtn.classList.add('active');
})