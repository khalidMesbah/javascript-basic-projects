const valueEl = document.getElementById(`value`);
const decreaseEl = document.querySelector(`.decrease`);
const resetEl = document.querySelector(`.reset`);
const increaseEl = document.querySelector(`.increase`);

decreaseEl.addEventListener(`click`, () => {
    valueEl.textContent = +valueEl.textContent - 1;
    changeColor();
});

resetEl.addEventListener(`click`, () => {
    valueEl.textContent = 0;
    changeColor();
});

increaseEl.addEventListener(`click`, () => {
    valueEl.textContent = +valueEl.textContent + 1;
    changeColor();
});

const changeColor = () => {
    +valueEl.textContent > 0 ?
        valueEl.style.color = `green` :
        +valueEl.textContent < 0 ?
            valueEl.style.color = `red` :
            valueEl.style.color = `#222`;
};