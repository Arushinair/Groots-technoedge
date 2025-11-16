// main.js - basic interactivity
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle (if exists)
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }

  // Quick view removed — no-op
});