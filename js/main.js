const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/back1.jpg";

const foodImg = new Image();
foodImg.src = "img/civilian100.jpg";

const snakeImg = new Image();
snakeImg.src = "img/tank2.jpg";

let box = 64;

let score = 0;

var elem = document.getElementById("gay");


let food = {
	x: Math.floor((Math.random() * 9)) * box,
	y: Math.floor((Math.random() * 9)) * box,
};

let snake = {
	x: 5 * box,
	y: 5 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if(event.keyCode == 65)
		dir = "left";
	else if(event.keyCode == 87)
		dir = "up";
	else if(event.keyCode == 68)
		dir = "right";
	else if(event.keyCode == 83)
		dir = "down";
}

function soundClick() {
	var audio = new Audio(); // Создаём новый элемент Audio
	audio.src = 'scream.mp3'; // Указываем путь к звуку "клика"
	audio.autoplay = true; // Автоматически запускаем
  }

function soundClick1() {
	var audio = new Audio(); // Создаём новый элемент Audio
	audio.src = 'red.mp3'; // Указываем путь к звуку "клика"
	audio.autoplay = true; // Автоматически запускаем
  }
function hideSquare() {
	elem.parentNode.removeChild(elem);
	soundClick1()
	
}
function drawGame() {
	ctx.drawImage(ground, 0, 0);

	ctx.drawImage(foodImg, food.x, food.y);

	ctx.drawImage(snakeImg, snake.x, snake.y);

	ctx.fillStyle = "white";
	ctx.font = "25px Arial";
	ctx.fillText(score , box, box);

	ctx.fillStyle = "white";
	ctx.font = "18px Times New Roman";
	ctx.fillText("tiananmen square 1989" , box*6, 18);

	let snakeX = snake.x;
	let snakeY = snake.y;

	if(snakeX == food.x && snakeY == food.y) {
		score = score + 1;
		soundClick();
		ctx.fillStyle = "white";
		ctx.font = "25px Arial";
		ctx.fillText("+15 social credit", score , box*9);
		food = {
			x: Math.floor((Math.random() * 9)) * box,
			y: Math.floor((Math.random() * 9)) * box,
		};
	} else
		delete snake;
	
	if(score == 241) 
		document.write("ПОДНЯТИЕ! КОММУНИЗМ ЖИЗНЬ! АМЕРИКАНСКИЙ БУРГЕР СМЕРТЬ! ПОЛУЧИТЬ ЧАШКА РИС! ОБНОВИТЬ СТРАНИЦА ДЛЯ ПОВТОР");
	if(score == 241) clearInterval(game);

	if (snakeX < 0 )
		snakeX = box * 9 
	else if (snakeX == box * 9)
		snakeX = box
	else if (snakeY < 0)
		snakeY = box*9
	else if (snakeY == box * 9)
		snakeY = box

	if(dir == "left") snakeX -= box;
	if(dir == "right") snakeX += box;
	if(dir == "up") snakeY -= box;
	if(dir == "down") snakeY += box;

	snake = {
		x: snakeX,
		y: snakeY
	};



	
}


let game = setInterval(drawGame, 140);