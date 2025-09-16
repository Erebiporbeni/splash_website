var element= document.querySelector('.harmbugger')
let elementsToToggle = document.querySelector('.vertical_nav');
element.addEventListener('click',() =>{
    element.classList.toggle('active');
    elementsToToggle.classList.toggle('open');


});

let burger = document.querySelector('.harmbugger');
let nav = document.querySelector('.vertical_nav');
let closeBtn = document.querySelector('.x');

// Open nav
element.addEventListener('click', () => {
  elementsToToggle.classList.add('open');
});

// Close nav
closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});

    
    
