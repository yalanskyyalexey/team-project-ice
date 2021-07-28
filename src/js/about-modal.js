(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[data-about-modal-open]'),
    closeAboutModalBtn: document.querySelector('[data-about-modal-close]'),
    modal: document.querySelector('[data-about-modal-menu]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidd');
  }
})();
