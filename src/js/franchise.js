(() => {
  const refs = {
    openBoxBtn: document.querySelector('[data-box-open]'),
    closeBoxBtn: document.querySelector('[data-box-close]'),
    box: document.querySelector('[data-box]'),
  };

  refs.openBoxBtn.addEventListener('click', toggleBox);
  refs.closeBoxBtn.addEventListener('click', toggleBox);

  function toggleBox() {
    refs.box.classList.toggle('is-hidden');
  }
})();
