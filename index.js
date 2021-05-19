import { getTheme, setTheme } from './utils/local-storage.js';
import { chooseTheme } from './utils/render-utils.js';

chooseTheme(getTheme());

const themeToggle = document.getElementById('theme-toggle');
// const pdfButton = document.querySelector('.download');

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

// if(pdfButton) {
// 	pdfButton.addEventListener('click', () => {
// 		console.log('Thanks for checking out the console!');
// 		alert('Sorry, this button is not yet active. But thanks for clicking!');
// 	});
// }
