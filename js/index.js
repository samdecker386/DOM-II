// Your code goes here

// mouseover
const images = document.querySelectorAll('img');
images.forEach(event => {
    event.addEventListener('mouseover', event => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'transform 0.5s';
    })
    event.addEventListener('mouseleave', event => {
        event.target.style.transform = 'scale(1.0)';
    })
})

// move header to front
const header = document.querySelector(".main-navigation");
header.style.zIndex = "1";

// keydown
const html = document.querySelector('html');
html.addEventListener('keydown', () => {
    alert('There are no input fields.');
})

// mouseout
paragraphs = document.querySelectorAll('p');
paragraphs.forEach(event => {
    event.addEventListener('mouseout', event => {
        event.target.style.background = '#fae7d9';
        setTimeout(() => {
            event.target.style.background = 'white';
        }, 500)
    })
})

// click
const buttons = document.querySelectorAll('.btn');
buttons.forEach(event => {
    event.addEventListener('click', event => {
        event.target.style.color = '#fae7d9';
    })
})

// load
window.addEventListener('load', () => {
    window.alert('Welcome to the Fun Bus Travel Agency!')
})

// dblclick
const dblclick = document.querySelectorAll('.logo-heading, h2, h4');
dblclick.forEach(event => {
    event.addEventListener('dblclick', event => {
        event.target.style.fontWeight = 'bold';
    })
})

// wheel
body = document.querySelector('body');
body.addEventListener('wheel', event => {
    event.target.style.background = '#cfd4d3';
    setTimeout(() => {
        event.target.style.background = 'white';
    });
});

// drag
images.forEach(event => {
    event.addEventListener('drag', event => {
        body.style.background = 'rebeccapurple';
    })
})

// focus
const form = document.getElementById('form');
form.addEventListener('focus', event => {
  event.target.style.background = 'pink';    
}, true);

// blur
form.addEventListener('blur', event => {
  event.target.style.background = 'white';    
}, true);
// focus

// resize

// scroll

// select