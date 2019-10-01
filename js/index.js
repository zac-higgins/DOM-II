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

