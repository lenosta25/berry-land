// Burger
const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__body');
const body = document.body

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}
// Tabs
let tab = document.querySelectorAll('.shop-tabs__item');
for (let i = 0; i < tab.length; i++) {
	tab[i].addEventListener('click', function () {
		for (let j = 0; j < tab.length; j++) {
			tab[j].classList.remove('_active');
		}
		this.classList.add('_active');
	})
}