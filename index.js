import { getTheme, setTheme } from './utils/local-storage.js';
import { chooseTheme } from './utils/render-utils.js';

chooseTheme(getTheme());

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
	chooseTheme(getTheme());
});
