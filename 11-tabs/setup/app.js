/* const btns = document.querySelectorAll(`.tab-btn`);
btns.forEach(thisBtn => {
    thisBtn.addEventListener(`click`, () => {
        btns.forEach(btn => {
            const content = document.getElementById(btn.dataset.id);
            if (btn !== thisBtn) {
                btn.classList.remove(`active`);
                content.classList.remove(`active`);
            } else {
                btn.classList.add(`active`);
                content.classList.add(`active`);
            }
        });
    });
}); */

/* bubbling event listeners */
const about = document.querySelector(`.about`);
about.addEventListener(`click`, (e) => {
    const id = e.target.dataset.id;
    if (id) {
        const btns = document.querySelectorAll(`.tab-btn`);
        const thisBtn = e.target;
        btns.forEach(btn => {
            const content = document.getElementById(btn.dataset.id);
            if (btn !== thisBtn) {
                btn.classList.remove(`active`);
                content.classList.remove(`active`);
            } else {
                btn.classList.add(`active`);
                content.classList.add(`active`);
            }
        });
    }
});