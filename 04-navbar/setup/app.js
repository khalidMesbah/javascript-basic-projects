const toggleNavBtn = document.querySelector(`.nav-toggle`)
const ulEl = document.querySelector(`ul`)
toggleNavBtn.addEventListener(`click`,()=>{
    ulEl.classList.toggle(`show-links`)
})