let btn = document.querySelector(".service__btn");
let githubIcon = document.querySelector(".service__btn").querySelector("img");

btn.addEventListener('mouseleave', () => {
	githubIcon.setAttribute('src', './img/social/github-black.svg');
});
btn.addEventListener('mouseover', () => {
	githubIcon.setAttribute('src', './img/social/github.svg');
});