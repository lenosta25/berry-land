// показ статуса Корзина пустая
function toggleBasketStatus() {
  const basketWrapper = document.querySelector(".basket__wrapper");
  const basketEmptyBadge = document.querySelector(".basket__empty");
  const basketLine = document.querySelector("#winding-line");
  const orderForm = document.querySelector("#order-form");

  // Если элементов в корзине >0
  if (basketWrapper.children.length > 0) {
    // Полная (скрываем статус Корзина пустая)
    basketEmptyBadge.classList.add("none");
    basketLine.classList.remove("none");
    orderForm.classList.remove("none");
  } else {
    // пустая (показываем статус Корзина пустая)
    basketEmptyBadge.classList.remove("none");
    basketLine.classList.add("none");
    orderForm.classList.add("none");
  }
}
