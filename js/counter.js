window.addEventListener("click", function (event) {
   let counter;
   if(event.target.dataset.action === 'plus'|| event.target.dataset.action === 'minus'){
      const wrapperCounter = event.target.closest('.card__details-counter');
      counter = wrapperCounter.querySelector('[data-counter]');
   }
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }
  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
  }
});
