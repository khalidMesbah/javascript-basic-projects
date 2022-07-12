const colors = [`green`, `red`, `rgba(133,122,200)`, `#f15025`,`magenta`,`cyan`,`lime`,`orange`,`black`,`yellow`,`purple`,`pink`,`crimson`];
const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);
const main = document.querySelector(`main`);
btn.addEventListener(`click`, () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    color.textContent = randomColor;
    main.style.backgroundColor = `${randomColor}`;
});