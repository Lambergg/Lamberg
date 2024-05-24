const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	let name = input.value.trim();
	
	if (name === '') {
		alert('Пожалуйста, введите имя!');
		
		input.focus();
	} else { 
	greeting.textContent = `Пока,  ${name}! Спасибо что посетили!`;
	input.value = '';
	}
})