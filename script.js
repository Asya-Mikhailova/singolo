const MENU = document.getElementById('menu');
const PORTFOLIO_BUTTONS = document.querySelector('.portfolio-buttons');
const PICTURES = document.querySelector('.layout-4-columns');

MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

PORTFOLIO_BUTTONS.addEventListener('click', (event)=> {
    PORTFOLIO_BUTTONS.querySelectorAll('button').forEach(el => el.classList.remove('white'));
    event.target.classList.add('white');
});

PICTURES.addEventListener('click', (event)=>{
    PICTURES.querySelectorAll('img').forEach(el=>el.classList.remove('border'));
    event.target.classList.add('border');
});
