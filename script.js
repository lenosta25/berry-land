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