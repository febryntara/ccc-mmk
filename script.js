const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector(".nav-items")
navToggle.addEventListener("click",function(){
    navItems.classList.toggle("nav-restore")
})