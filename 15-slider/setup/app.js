const slides = document.querySelectorAll(`.slide`);
const prevBtn = document.querySelector(`.prevBtn`);
const nextBtn = document.querySelector(`.nextBtn`);
let counter = 0;

slides.forEach((slide, index) => slide.style.left = `${index * 100}%`);

nextBtn.addEventListener("click", () => carousel(counter++));
prevBtn.addEventListener("click", () => carousel(counter--));

const carousel = () => {

    counter >= slides.length - 1 ?
        nextBtn.style.display = "none" :
        nextBtn.style.display = "block";

    counter <= 0 ?
        prevBtn.style.display = "none" :
        prevBtn.style.display = "block";

    slides.forEach((slide) => slide.style.transform = `translateX(-${counter * 100}%)`);

};

prevBtn.style.display = "none";
