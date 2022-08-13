const basketWrapper = document.querySelector(".basket__wrapper");
//Отслеживаем клик на странице
window.addEventListener("click", function (event) {
  //   Проверяем что клик был совершен по кнопке ДОБАВИТЬ В КОРЗИНУ
  if (event.target.hasAttribute("data-basket")) {

    // Находим карточку с товаром, внутри которой был совершен клик
    const card = event.target.closest(".card");
    // Собираем данные с этого товара и записиваем в единый обьект productInfo
    const productInfo = {
      id: card.dataset.id,
      title: card.querySelector(".card__titel").innerText,
      counter: card.querySelector("[data-counter]").innerText,
      currency: card.querySelector(".card__price-currency").innerText,
    };
    // Проверяем есть ли такой товар в карзине(если есть +)
    const itemInBasket = basketWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    // Если товар есть в корзине
    if (itemInBasket) {
      const counterElement = itemInBasket.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      // Если товара нет в корзине
      // Собрание данные подставляем в шаблон для товаров в корзине
      const basketItemHtml = `
      <div class="basket-item" data-id="${productInfo.id}">
         <div class="basket-item__top">
            <span class="basket-item__delete icon-trash" data-trash></span>
            <h5 class="basket-item__title">
            ${productInfo.title}
            </h5>
         </div>
         <div class="basket-item__bottom">
            <span data-counter> ${productInfo.counter}</span>
            x
            <span data-currency> ${productInfo.currency}</span>
         </div>
      </div>
      `;
      // Отображаем в корзине
      basketWrapper.insertAdjacentHTML("beforeend", basketItemHtml);
    }
    // Сбрасываем счетчик добавления товара на 1
    card.querySelector('[data-counter]').innerText ='1';

    // Отображение статуса корзины (пустая)
    toggleBasketStatus();
    // Подсчет общей стоимости товаров к корзине
    calcBasketPrice();
  }
  // Удаление товара при нажатии на trash
  if (event.target.hasAttribute("data-trash")){
    const itemCard = document.querySelector('.basket-item');
    itemCard.remove();
    // Отображение статуса корзины (пустая)
    toggleBasketStatus();
    calcBasketPrice();
  }
});




