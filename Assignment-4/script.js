const hamburger=document.querySelector('.hamburger');
const nav_links=document.querySelector('.nav-links');

hamburger.addEventListener('click',function(e){
    e.preventDefault();
    nav_links.classList.toggle('active');
    hamburger.classList.toggle('open');
})
