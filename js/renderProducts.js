const productsConteiner= document.querySelector('#products-conteiner');
getProducts()
async function getProducts(){
   const response = await fetch('./js/products.json');
   const productsArray =await response.json();
   renderProducts(productsArray)
}
function renderProducts(productsArray){
   productsArray.forEach(function(item) {
      const productsHTML = `
      <article class="shop__card card ${item.type}" data-id="${item.id}">
                <h3 class="card__titel">
                  ${item.title}
                </h3>
                <div class="card__img-wrapper">
                  <img
                  class="card__img-product"
                  src="./img/cards/${item.imgSrc}"
                  alt="raspberry"
                />
                </div>
                <div class="card__price">
                  <div class="card__price-currency">${item.price} грн</div>
                  <div class="card__price-weight">за ${item.weight} кг</div>
                </div>
                <div class="card__details">
                  <div class="card__details-counter counter">
                    <div class="counter__control" data-action="minus">-</div>
                    <div class="counter__quatity" data-counter>1</div>
                    <div class="counter__control" data-action="plus">+</div>
                  </div>
                  <button class="card__details-btn btn" data-basket>
                    В корзину
                  </button>
                </div>
              </article>
      `;
      productsConteiner.insertAdjacentHTML('beforeend', productsHTML)
   });
}