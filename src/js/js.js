let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function body_fixed_on() {
  scroll_top = window.scrollY;
  document.body.style.cssText = 'overflow: hidden; top: -' + scroll_top + 'px';
}

function body_fixed_off() {
  document.body.removeAttribute('style');
  window.scrollTo(0, scroll_top);
}

Array.from(document.querySelectorAll('.js-menu-open')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const menu = document.getElementById('nav');
    body_fixed_on();
    menu.classList.add('nav_open');
  });
});

Array.from(document.querySelectorAll('.js-menu-close')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const menu = document.getElementById('nav');
    body_fixed_off();
    menu.classList.remove('nav_open');
  });
});