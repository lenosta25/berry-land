function calcBasketPrice() {
  const basketItems = document.querySelectorAll(".basket-item");
  const totalPriceElement = document.querySelector(".sum")
  let totalPrice = 0;
  basketItems.forEach(function (item) {
    const amountElement = item.querySelector('[data-counter]');
    const priceElement = item.querySelector('[data-currency]');
    
    const currentPrice = parseInt(amountElement.innerText) * parseInt(priceElement.innerText);
    totalPrice += currentPrice;
  });
//   Отображаем цену на странице
  totalPriceElement.innerText = totalPrice;
};

