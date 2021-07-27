(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    closeModalLink: document.querySelector('[data-menu-link-close]'),
    closeModalMenuBtn: document.querySelector('[data-menu-btn-close]'),

    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalLink.addEventListener('click', toggleModal);
  refs.closeModalMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();