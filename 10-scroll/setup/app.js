// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById(`date`);
date.textContent = new Date().getFullYear();
// ********** close links ************
const navToggleBtn = document.querySelector(`.nav-toggle`);
const linksContainer = document.querySelector(`.links-container`);
const links = document.querySelector(`.links`);

navToggleBtn.addEventListener(`click`, () => {
    linksContainer.getBoundingClientRect().height ?
        linksContainer.style.height = `${0}px` :
        linksContainer.style.height = `${links.getBoundingClientRect().height}px`;

});
// ********** fixed navbar ************
const topLink = document.querySelector(`.top-link`);
const navbar = document.getElementById(`nav`);
window.addEventListener(`scroll`, () => {
    const navbarHeight = navbar.getBoundingClientRect().height;
    window.scrollY > navbarHeight ?
        (navbar.classList.add(`fixed-nav`), topLink.classList.add(`show-link`)) :
        (navbar.classList.remove(`fixed-nav`), topLink.classList.remove(`show-link`));
});
// ********** smooth scroll ************
const scrollLinksElements = document.querySelectorAll(`.scroll-link`);
scrollLinksElements.forEach(link => {
    link.addEventListener(`click`, (e) => {
        e.preventDefault();
        const element = document.getElementById(e.currentTarget.getAttribute(`href`).slice(1));
        const fixedNav = navbar.classList.contains(`fixed-nav`);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navbarHeight = navbar.getBoundingClientRect().height;
        linksContainer.style.height = `${0}px`;
        let position = element.offsetTop - navbarHeight;
        if (!fixedNav) position -= navbarHeight;
        if (navbarHeight > 82) position += containerHeight;
        window.scrollTo(0, position);
    });
});
// select links
