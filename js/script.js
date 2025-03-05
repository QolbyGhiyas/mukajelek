// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//when it clicks
document.querySelector('#hamburger').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Close navbar outside navbar
const hamburger = document.querySelector('#hamburger');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };
});
