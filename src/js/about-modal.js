(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[about-modal-open]'),
    closeAboutModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-modal-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidd');
  }
})();
