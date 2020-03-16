const MENU = document.getElementById('menu');
const PORTFOLIO_BUTTONS = document.querySelector('.portfolio-buttons');
const PICTURES = document.querySelector('.picture');
const NEXT = document.querySelector('.next');
const PREV = document.querySelector('.prev');
const SUBMIT_BTN = document.querySelector('#submit');
const CLOSE_BTN = document.querySelector('#close-btn');
const PHONE_VERTICAL = document.querySelector('.vertical');
const PHONE_HORIZONTAL = document.querySelector('.horizontal');
const FORM = document.querySelector('.quote-form');


/* Change activity of navigation buttons*/
MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

/* Slider*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = "block";
}
/*Phone switching off and on */
PHONE_VERTICAL.addEventListener('click', function(){
    let vertical_black = document.querySelector('.vertical-black');
    vertical_black.classList.contains('hidden') ? vertical_black.classList.remove('hidden') : vertical_black.classList.add('hidden');
})

PHONE_HORIZONTAL.addEventListener('click', function(){
    let horizontal_black = document.querySelector('.horizontal-black');
    horizontal_black.classList.contains('hidden') ? horizontal_black.classList.remove('hidden') : horizontal_black.classList.add('hidden');
})

/*Change activity of portfolio tags and change of img position */
PORTFOLIO_BUTTONS.addEventListener('click', (event)=> {
    PORTFOLIO_BUTTONS.querySelectorAll('button').forEach(el => el.classList.remove('white'));
    event.target.classList.add('white');
     let images = [];
    let temp;
    PICTURES.document.querySelectorAll('img').forEach(el=>{images.push(el)});
    temp = images.shift();
    images.push(temp);
    images.forEach(el=> PICTURES.appendChild(el));
});


/* Add border to the image on clicking it*/
PICTURES.addEventListener('click', (event)=>{
    PICTURES.querySelectorAll('img').forEach(el=>el.classList.remove('border'));
    event.target.classList.add('border');
});

/*Modal window on submit button*/

    FORM.addEventListener('submit', (e)=>{
        this.checkValidity();
        e.preventDefault();
    })

    SUBMIT_BTN.addEventListener('submit', (e) =>{
        e.preventDefault();
        const topic= document.getElementById('topic').value.toString();
        const project = document.getElementById('project').value.toString();
        topic == '' ? document.getElementById('empty-subject').innerText = 'Без темы' : document.getElementById('subject').innerText = topic;
        project == '' ? document.getElementById('empty-description').innerText = 'Без описания' : document.getElementById('description').innerText = project;
        document.getElementById('message-block').classList.remove('hide');
        
    })
    

CLOSE_BTN.addEventListener('click', () =>{
    document.getElementById('topic').innerText = '';
    document.getElementById('project').innerText = '';
    document.getElementById('message-block').classList.add('hide');
})

