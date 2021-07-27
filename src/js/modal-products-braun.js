(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-braun]'),
    closeModalBtn: document.querySelector('[data-modal-close-braun]'),
    modal: document.querySelector('[data-modal-braun]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();