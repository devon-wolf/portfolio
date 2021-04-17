const THEME = 'THEME'

export function getTheme() {
	const theme = localStorage.getItem(THEME);
	try {
		return JSON.parse(theme);
	}
	catch {
		return '';
	}
}

export function setTheme(value) {
	localStorage.setItem(THEME, JSON.stringify(value));
}