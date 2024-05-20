// модальное окно
const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");

cookiesBtn.addEventListener("click", function () {
  cookies.style.display = "none";
});

// бургер меню

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


// фильтрация

function myapp() {
  const buttons = document.querySelectorAll(".button");
  const cards = document.querySelectorAll(".card");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      console.log(currentCategory);
      filter(currentCategory, cards);
    });
  });
}

myapp();

// табы

const showTab = (elTabBtn) => {
  const elTab = elTabBtn.closest('.tab');
  if (elTabBtn.classList.contains('tab-btn-active')) {
    return;
  }
  const targetId = elTabBtn.dataset.targetId;
  const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
  if (elTabPane) {
    const elTabBtnActive = elTab.querySelector('.tab-btn-active');
    elTabBtnActive.classList.remove('tab-btn-active');
    const elTabPaneShow = elTab.querySelector('.tab-pane-show');
    elTabPaneShow.classList.remove('tab-pane-show');
    elTabBtn.classList.add('tab-btn-active');
    elTabPane.classList.add('tab-pane-show');
  }
}

document.addEventListener('click', (e) => {
  if (e.target && !e.target.closest('.tab-btn')) {
    return;
  }
  const elTabBtn = e.target.closest('.tab-btn');
  showTab(elTabBtn);
});



