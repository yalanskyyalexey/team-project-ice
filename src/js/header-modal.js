(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-modal-open]'),
    openModalBtnTwo: document.querySelector('[data-header-modal-open-second]'),

    closeModalBtn: document.querySelector('[data-header-modal-close]'),
    closeModalBtnDrop: document.querySelector('[data-header-modal-drop-close]'),
    modal: document.querySelector('[data-header-data-modal]'),
  };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnTwo.addEventListener('click', toggleModal);

    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtnDrop.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
  }
})();

