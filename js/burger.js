let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
console.log(burger);
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
	document.body.classList.toggle('lock');
})