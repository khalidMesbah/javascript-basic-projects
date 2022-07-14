// ****** SELECT ITEMS **********
const groceryList = document.querySelector(`.grocery-list`);
const groceryContainer = document.querySelector(`.grocery-container`);
const clearBtn = document.querySelector(`.clear-btn`);
const grocery = document.getElementById(`grocery`);
const addGrocery = document.querySelector(`.submit-btn`);
const editBtn = document.querySelector(`.edit-btn`);
const deleteBtn = document.querySelector(`.delete-btn`);
const alertEl = document.querySelector(`.alert`);
const list = {};
// edit option

// ****** EVENT LISTENERS **********
addGrocery.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (addGrocery.textContent === `submit`) {
    if (grocery.value) {
      alert(`Item Added To The List`, `success`);
      groceryContainer.classList.add(`show-container`);
      addNewGrocery(`id${Math.floor(Math.random() * 10000000)}`, grocery.value);
      grocery.value = ``;
    } else {
      alert(`Please Enter Value`, `danger`);
    }
  }
});
clearBtn.addEventListener(`click`, () => {
  clearAll();
});
// ****** FUNCTIONS **********
const alert = (message, status) => {
  if (status === `success`) {
    alertEl.textContent = message;
    alertEl.classList.remove(`alert-danger`);
    alertEl.classList.add(`alert-success`);
    setTimeout(() => {
      alertEl.classList.remove(`alert-success`);
      alertEl.textContent = ``;
    }, 1000);
  } else if (status === `danger`) {
    alertEl.textContent = message;
    alertEl.classList.remove(`alert-success`);
    alertEl.classList.add(`alert-danger`);
    setTimeout(() => {
      alertEl.classList.remove(`alert-danger`);
      alertEl.textContent = ``;
    }, 1000);
  }
};
const clearAll = () => {
  groceryContainer.classList.remove(`show-container`);
  alert(`empty list`, `danger`);
  grocery.value = ``;
  groceryList.innerHTML = ``;
  localStorage.clear();
  clearBtn.classList.add();
};
const showGroceries = () => {
  if (localStorage.length) groceryContainer.classList.add(`show-container`);
  const reservedList = JSON.parse(localStorage.getItem(`list`));
  for (let id in reservedList) addNewGrocery(id, reservedList[id]);
};
const addNewGrocery = (id, title) => {
  const article = document.createElement(`article`);
  list[id] = title;
  article.classList.add(`grocery-item`);
  article.dataset.id = `id`;
  article.innerHTML = `
  <p class="title">${title}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>`;
  article.addEventListener(`click`, (e) => {
    const btn = e.target;
    if (btn.classList.contains(`delete-btn`)) {
      alert(`Item Removed`, `danger`);
      article.remove();
      delete list[id];
      if (groceryList.children.length === 0) clearAll();
    } else if (btn.classList.contains(`edit-btn`)) {
      addGrocery.textContent = `edit`;
      grocery.focus();
      const title = article.querySelector(`.title`);
      grocery.value = title.textContent;
      addGrocery.addEventListener(`click`, (e) => {
        e.preventDefault();
        addGrocery.textContent = `submit`;
        title.textContent = grocery.value;
        list[id] = title.textContent;
        updateLocalStorage();
        grocery.value = ``;
      }, { once: true });
    }
  });
  groceryList.appendChild(article);
  updateLocalStorage();
};
// ****** LOCAL STORAGE **********
const updateLocalStorage = () => localStorage.setItem(`list`, JSON.stringify(list));
// ****** SETUP ITEMS **********
window.addEventListener(`load`, showGroceries);
