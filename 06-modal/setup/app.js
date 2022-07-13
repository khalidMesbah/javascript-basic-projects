const openModalBtn = document.getElementById(`open-modal-btn`);
const closeModalBtn = document.getElementById(`close-modal-btn`);
const modalOverlay = document.querySelector(`.modal-overlay`);

openModalBtn.addEventListener(`click`, () => {
    modalOverlay.classList.add(`open-modal`);
});
closeModalBtn.addEventListener(`click`, () => {
    modalOverlay.classList.remove(`open-modal`);
});