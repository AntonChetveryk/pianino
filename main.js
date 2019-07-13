const play1 = document.getElementById("audio1"),
	  play2 = document.getElementById("audio2"),
	  play3 = document.getElementById("audio3"),
	  play4 = document.getElementById("audio4"),
	  play5 = document.getElementById("audio5"),
	  play6 = document.getElementById("audio6"),
	  play7 = document.getElementById("audio7"),
	  play8 = document.getElementById("audio8")
	    
function playMusic1() { 
    audio1.play(); 
};
function playMusic2() { 
    audio2.play(); 
} 
function playMusic3() { 
    audio3.play(); 
} 
function playMusic4() { 
    audio4.play(); 
} 
function playMusic5() { 
    audio5.play(); 
} 
function playMusic6() { 
    audio6.play(); 
} 
function playMusic7() { 
    audio7.play(); 
} 
function playMusic8() { 
    audio8.play(); 
} 

const a = document.getElementById('a'),
	listner = function (event) {
		switch (event.keyCode) {
			case 65:
				playMusic1();
				break;
			case 83:
				playMusic2();
				break;
			case 68:
				playMusic3();
				break;
			case 70:
				playMusic4();
				break;
			case 71:
				playMusic5();
				break;
			case 72:
				playMusic6();
				break;
			case 74:
				playMusic7();
				break;
			case 75:
				playMusic8();
				break;
		}
	}


document.body.addEventListener('keydown', listner);