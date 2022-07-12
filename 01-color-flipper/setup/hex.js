const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);
const main = document.querySelector(`main`);

btn.addEventListener(`click`, () => {
    let randomColor = `#`;
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hex.length);
        randomColor += hex[randomIndex];
    }
    color.textContent = randomColor;
    main.style.backgroundColor = `${randomColor}`;
});