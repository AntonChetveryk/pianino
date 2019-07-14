const item = document.querySelectorAll('.item'),
	audio = document.querySelectorAll('audio'),
	listnerKeyDown = function (event) {
		const keyCode = event.keyCode;
		for (let i = 0; i < item.length; i++) {
			if (keyCode == item[i].id) {
				item[i].classList.add('bigger');
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
