window.addEventListener("click", function () {
  const cards = document.querySelectorAll(".shop__card");
  const tabs = document.querySelectorAll(".shop-tabs__item");
  const bgImg = document.querySelector('.bg-img');

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      // Удаление картинок на заднем фоне 
      bgImg.remove()
      let filterClass = event.target.dataset["filter"];
      cards.forEach((elem) => {
        elem.classList.remove("hide");
        if (!elem.classList.contains(filterClass) && filterClass !== "all") {
          elem.classList.add("hide");
        }
      });
    });
  });
  // Активность табов
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove("_active");
      }
      this.classList.add("_active");
    });
  }
});
