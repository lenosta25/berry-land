const btns = document.querySelectorAll('#modal-basket');
const modalOverlay = document.querySelector('.modal');
const modalItem = document.querySelector('.modal__item');
const btnCloseModal =document.querySelector('.modal__item-close');

btns.forEach((el)=>{
   el.addEventListener('click', (e)=>{
      modalOverlay.classList.add('modal--visible');
      modalItem.classList.add('modal__item--visible');
      document.body.classList.add('_disable-skroll');
   })
});
modalOverlay.addEventListener('click', (e)=>{
   console.log(e.target);
   if(e.target === modalOverlay){
      modalOverlay.classList.remove('modal--visible');
   }
   document.body.classList.remove('_disable-skroll');
});
btnCloseModal.addEventListener('click', (e)=>{
   modalOverlay.classList.remove('modal--visible');
});
