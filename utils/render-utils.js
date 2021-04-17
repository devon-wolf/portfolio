export function chooseTheme(storedTheme) {
	if (storedTheme === 'light') {
		document.documentElement.classList.add('light');
	}
	else {
		document.documentElement.classList.remove('light');
	}
}