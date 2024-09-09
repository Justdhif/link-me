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

const readMore = document.querySelector('.read_more');

readMore.addEventListener('click', () => {
    document.querySelector('.skill_container').classList.toggle('active');

    if (document.querySelector('.skill_container').classList.contains('active')) {
        document.querySelector('.read_more h3').textContent = 'Close';
        document.getElementById('arrow').style.transform = 'rotate(90deg)';
        document.querySelector('.back_top').style.display = 'flex';
    }

    else {
        document.querySelector('.read_more h3').textContent = 'See more';
        document.getElementById('arrow').style.transform = 'rotate(-90deg)';
        document.querySelector('.back_top').style.display = 'none';
    }
})

window.onscroll = () => {

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 200);
};

const secret = document.querySelector('.secret');
const masuk = document.querySelector('.masuk');
const btnSecret = document.querySelector('.secret_page');

masuk.addEventListener('click', () => {
    secret.classList.add('active');
})

btnSecret.addEventListener('click', () => {
    secret.classList.add('active');
})

document.querySelector('.btn_close').addEventListener('click', () => {
    secret.classList.remove('active');
})

document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.getElementById('input').value;
    if (input == "e") {
        location.href = 'secret.html';
    }

})