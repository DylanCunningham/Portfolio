var canvas = document.querySelector('canvas');
	canvas.width = 300;
	canvas.height = 225;
var c = canvas.getContext('2d');

var AI = false;
var AIview = 4;

var playerWidth = 10;
var playerHeight = 50;
var playerX = 20;
var playerY =100;
var playerSpeed = 5;





var gameColor = "red";


var keysDown = {};
addEventListener('keydown', function (e) {
	keysDown[e.keyCode] = true;
	console.log(e.keyCode);
}, false);

addEventListener('keyup', function (e) {  
	delete keysDown[e.keyCode];
}, false);






var player = function(w, h, x, y, color, speed){
	this.width = 10;
	this.height = 50;
	this.x = 20;
	this.y = 100;
	this.color = "white";
	this.speed = speed;


	this.create = function(){
		c.beginPath;
		c.fillStyle = this.color;
		c.fillRect(this.x, this.y, this.width, this.height);
		c.fill();
	}


	this.interact = function(){
		if(this.y + this.height < canvas.height){
			if(40 in keysDown){
			this.y = this.y + 5;

		}


		}


		if(this.y > 0){
			if(	38 in keysDown){
				this.y = this.y - 5;
			}
		}

			//Artificial intelligence
	if(AI){
		if(this.y + this.height < canvas.height){
			if(Ball.x < (canvas.width / 4)){
				if(Ball.y > this.y + 25){
					this.y += 5;
				}
			}
		}

		if(this.y > 0){	
			if(Ball.x < (canvas.width / 4)){
				if(Ball.y < this.y +25){
				this.y -= 5;
				}
			}
		}
	}


	//hitbox









		players[0].create();

	};

}

function Circle(x, y, dx, dy, r, maxRadius, minRadius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = r;
	this.color = "white";
	this.maxRadius = maxRadius;
	this.minRadius = minRadius;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = this.color;
		c.stroke();
		c.fillStyle = this.color;
		c.fill();

	}


	this.update = function(){
		//container
		if(this.x - this.radius < 0){
			this.x = 100;
			this.y = 112.5;
			this.dx = -this.dx;
		}

		if(this.x + this.radius > canvas.width){
			this.dx = -this.dx;
		}
		if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
			this.dy = -this.dy;
		}

		if(this.y > players[0].y && this.y < (players[0].y + players[0].height) && this.x < (players[0].x + players[0].width)){
			this.dx = -this.dx;

		}







		this.x += this.dx;
		this.y += this.dy;

		this.draw();

		//interact

		
		}
	}



var players = [];

var Ball = new Circle(200, 200, 4, 4, 5,);
players[0] = new player;
players[1] = new player;








function animate(){
	c.clearRect(0, 0, innerWidth, innerHeight);
	requestAnimationFrame(animate);

	players[0].interact();
	Ball.update();


}


animate();