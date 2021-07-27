(() => {
  const refs = {
    openModalBtn: document.querySelector('[about-modal-open]'),
    closeModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
