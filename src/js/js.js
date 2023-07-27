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

Array.from(document.querySelectorAll('.js-blur-click')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const block = e.target.closest('.js-blur-click');
    block.classList.toggle('is-blur');
  });
});

Array.from(document.querySelectorAll('#form-auth')).forEach((e) => {
  let formActivate = (index=0) => {
    Array.from(e.querySelectorAll('.js-auth-tab')).forEach((el) => {
      el.classList.remove('is-active');
    });
    e.querySelectorAll('.js-auth-tab')[index].classList.add('is-active');
    Array.from(e.querySelectorAll('form')).forEach((el) => {
      el.style.display = 'none';
    });
    e.querySelectorAll('form')[index].style.display = "block";
  };

  let analysis = () => {
    let hash = document.location.hash.slice(1);
    let tab = (hash) ? e.querySelector('.js-auth-tab[data-hash='+hash+']') : null;
    let index = (hash && tab) ?
      e.querySelector('.js-auth-tab[data-hash='+hash+']').dataset.index : 0;
    formActivate(index);
  };

  Array.from(e.querySelectorAll('.js-auth-tab')).forEach((link) => {
    link.addEventListener('click', (e) => {
      let tab = e.target.closest('.js-auth-tab')
      let hash = tab.dataset.hash;
      window.location.hash = (hash) ? '#' + hash : '';
    });
  });

  analysis();

  window.addEventListener('hashchange', () => {
    analysis();
  });

});