document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.hamburger').classList.toggle('active');
  document.querySelector('nav#main-nav')?.classList.toggle('expanded');
});
