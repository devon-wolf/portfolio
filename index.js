import { getTheme, setTheme } from './utils/local-storage.js';

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
	const currentTheme = getTheme();
	switch(currentTheme) {
		case 'light':
			setTheme('dark');
			break;
		case 'dark':
			setTheme('light');
			break;
		default:
			setTheme('light');
			break;
	};
	console.log (getTheme());
});