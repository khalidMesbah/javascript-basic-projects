const sidebar = document.querySelector(`.sidebar`);
const toggleSidebarBtn = document.querySelector(`.sidebar-toggle`);
const closeSidebarBtn = document.querySelector(`.close-btn`);
toggleSidebarBtn.addEventListener(`click`, () => {
    sidebar.classList.toggle(`show-sidebar`);
});
closeSidebarBtn.addEventListener(`click`, () => {
    sidebar.classList.remove(`show-sidebar`);
});