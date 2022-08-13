function toggleBasketStatus() {
  const basketWrapper = document.querySelector(".basket__wrapper");
  const basketEmptyBadge = document.querySelector(".basket__empty");
  const basketLine = document.querySelector("#winding-line");
  const basketDelivery = document.querySelector(".basket__total-delivery");
  const orderForm = document.querySelector("#order-form");

  // Если элементов в корзине >0
  if (basketWrapper.children.length > 0) {
    // скрываем статус Корзина пустая
    basketEmptyBadge.classList.add("none");
    // Показываем линию
    basketLine.classList.remove("none");
    // Показываем доставку
    basketDelivery.classList.remove("none");
    // Показываем форму заказа
    orderForm.classList.remove("none");
  } else {
    // пустая (показываем статус Корзина пустая)
    basketEmptyBadge.classList.remove("none");
    basketLine.classList.add("none");
    basketDelivery.classList.add("none");
    orderForm.classList.add("none");
  }
}
