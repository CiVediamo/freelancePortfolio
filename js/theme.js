const boxTheme = document.querySelector(".theme");

// 1. system settings
if (window.matchMedia && window.matchMedia("prefers-color-scheme: dark").matches) {
	boxTheme.classList.add("dark-mode");
	document.body.classList.add("dark");
}

// 2. User changing theme
if (localStorage.getItem('mode') == 'dark') {
	boxTheme.classList.add("dark-mode");
	document.body.classList.add("dark");
}

window.matchMedia("prefers-color-scheme: dark").addEventListener('change', (event) => {
	const newColorScheme = event.matches ? "dark" : "light";

	if (newColorScheme == "dark") {
		boxTheme.classList.add("dark-mode");
		document.body.classList.add("dark");
		localStorage.setItem('mode', 'dark');
	} else {
		boxTheme.classList.remove("dark-mode");
		document.body.classList.remove("dark");
		localStorage.setItem('mode', 'light');
	}
})

boxTheme.addEventListener('click', () => {
	boxTheme.classList.toggle("dark-mode");
	const isDark = document.body.classList.toggle("dark");

	isDark ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light')
})