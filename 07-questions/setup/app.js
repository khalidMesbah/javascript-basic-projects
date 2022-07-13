// using selectors inside the element
const questions = document.querySelectorAll(`.question`);
questions.forEach(thisQuestion => {
    const btn = thisQuestion.querySelector(`.question-btn`);
    btn.addEventListener(`click`, () => {
        questions.forEach(question => {
            question === thisQuestion ?
                question.classList.toggle(`show-text`) :
                question.classList.remove(`show-text`);
        });
    });
});
// traversing the dom
/* const btns = document.querySelectorAll(`.question-btn`);

btns.forEach(btn => {
    btn.addEventListener(`click`, e => {
        document.querySelectorAll(`.question`).forEach(question => {
            question.classList.remove(`show-text`);
        });
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle(`show-text`);
    });
});
 */