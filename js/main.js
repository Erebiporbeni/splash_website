var element= document.querySelector('.harmbugger')
let elementsToToggle = document.querySelector('.vertical_nav');
let elementsToToggle_black = document.querySelector('.vertical_nav_black');
let closeBtn = document.querySelector('.x');

// Open nav
element.addEventListener('click', () => {
  elementsToToggle.classList.add('open');
  elementsToToggle_black.classList.add('open')
});

// Close nav
closeBtn.addEventListener('click', () => {
  elementsToToggle.classList.remove('open');
  elementsToToggle_black.classList.remove('open')
});

    
    
