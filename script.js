const adviceNumber = document.querySelector('#advice-number');
const adviceContent = document.querySelector('#advice-content');
const adviceButton = document.querySelector('#advice-button');

const fecthAdvice = async () => {
	const response = await fetch('https://api.adviceslip.com/advice');

	const { slip } = await response.json();

	const { id, advice } = slip;

	adviceNumber.textContent = id;
	adviceContent.textContent = advice;
	console.log('fetch');
};

window.addEventListener('load', fecthAdvice);
adviceButton.addEventListener('click', fecthAdvice);
