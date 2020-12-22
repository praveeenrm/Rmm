// gsap.from('.nav-links li', {opacity:0, duration: 0.5, y:-100, stagger: 0.3});
// gsap.from('.book', {opacity:0, duration: 1, y:-500});


let burger = document.querySelector(".burger")
let navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", showNav);

function showNav(e) {
    navLinks.classList.toggle("nav-active")

    burger.children[0].classList.toggle('line1-anime');
    burger.children[1].classList.toggle('line2-anime');
    burger.children[2].classList.toggle('line3-anime');
}

