function calcBasketPriceAndDelivery() {
  const basketItems = document.querySelectorAll(".basket-item");
  const totalPriceElement = document.querySelector(".sum");
  const deliveryCost = document.querySelector(".delivery-cost");
  const deliveryCondition = document.querySelector(".delivery-condition");
  let totalPrice = 0;

  basketItems.forEach(function (item) {
    const amountElement = item.querySelector('[data-counter]');
    const priceElement = item.querySelector('[data-currency]');
    const currentPrice = parseInt(amountElement.innerText) * parseInt(priceElement.innerText);
    totalPrice += currentPrice;
    // Отображение статуса доставки (бесплатно или 80грн)
    if(totalPrice >= 600){
      deliveryCost.classList.add('free');
      deliveryCost.innerText = 'бесплатно';
      deliveryCondition.classList.add("none");
    }else{
      deliveryCost.classList.add('price');
      deliveryCost.innerText = '80 грн';
      const deliveryCostPrice = parseInt( deliveryCost.innerText = '80')
      deliveryCondition.classList.remove("none");
      // если доставка 80 + ее к общей цене
      totalPrice += deliveryCostPrice
    }
  });
//   Отображаем цену товаров на странице
  totalPriceElement.innerText = totalPrice;
};

