(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[about-modal-open]'),
    closeAboutModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-modal-menu]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidd');
  }
})();
