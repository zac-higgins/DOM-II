// Your code goes here
const navLinks = document.querySelectorAll('.nav-link');

//grey background and scale-up on nav link hover
navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
       link.style.transform = "scale(1.2)";
       link.style.transition = "all 0.3s"
       link.style.backgroundColor = '#dfe4ed'
    })
    link.addEventListener('mouseleave', () => {
        link.style.transform = "scale(1)";
        link.style.transition = "all 0.3s"
        link.style.background = 'none'
    })
    link.addEventListener
});

//random background color on mouse double click
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    return bgColor;
}
const crazyMouse = document.querySelector('body');
window.addEventListener('dblclick', () => {
    crazyMouse.style.backgroundColor = random_bg_color();
});

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });

const pictures = document.querySelectorAll('img');
pictures.forEach((image) => {
    window.addEventListener('scroll', () => {
        image.style.transform = "scale(0.8)",
        image.style.transition = "all 0.3s"
    })
    image.addEventListener('click', () => {
        image.style.transform = 'rotate(90deg)';
        image.style.transition = "all 1s"
    })
    window.addEventListener('keydown', () => {
        image.style.transform = 'rotate(180deg)';
        image.style.transition = "all 1s"
    })
    window.addEventListener('keyup', () => {
        image.style.transform = 'rotate(0deg)';
        image.style.transition = "all 1.5s"
    })

})

const text = document.querySelectorAll('p');
console.log(text);
text.forEach((paragraph) => {
    window.addEventListener('resize', () => {
        paragraph.style.fontSize = "2rem";
        paragraph.style.color = "blue";
    })
})

const fullScreen = document.getElementsByTagName('body');
window.addEventListener('blur', () => {
    fullScreen[0].style.transform = 'rotate(180deg)';
})
window.addEventListener('focus', () => {
    fullScreen[0].style.transform = 'rotate(0deg)';
})

