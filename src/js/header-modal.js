(() => {
  const refs = {
    openModalBtn: document.querySelector('[header-modal-open]'),
    openModalBtnTwo: document.querySelector('[header-modal-open-second]'),

    closeModalBtn: document.querySelector('[header-modal-close]'),
    closeModalBtnDrop: document.querySelector('[header-modal-drop-close]'),
    modal: document.querySelector('[header-data-modal]'),
  };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnTwo.addEventListener('click', toggleModal);

    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtnDrop.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
  }
})();

