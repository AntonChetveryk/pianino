////event "клавиатуры"
const div = document.querySelector('.test');
const item = document.querySelectorAll('.item'),
	container = document.querySelector('.container'),
	audio = document.querySelectorAll('audio'),
	listnerKeyDown = function (event) {
		const keyCode = event.keyCode;
		for (let i = 0; i < item.length; i++) {
			if (keyCode == item[i].id) {
				item[i].classList.add('bigger');
				item[i].lastElementChild.currentTime = 0;
				item[i].lastElementChild.play();
			}
		}
	},
	listnerKeyUp = function (event) {
		const keyCode = event.keyCode;
		for (let i = 0; i < item.length; i++) {
			if (keyCode == item[i].id) {
				item[i].classList.remove('bigger');
			}

		}
	};
document.body.addEventListener('keydown', listnerKeyDown);

document.body.addEventListener('keyup', listnerKeyUp);



/// event "мышь"
function clickMouse(event) {
	if (event.target.getAttribute('Class') === 'item') {
		console.log(event.target.getAttribute('Class'));
		event.target.childNodes[1].currentTime = 0;
		event.target.childNodes[1].play();
	}
}

container.addEventListener('click', clickMouse);