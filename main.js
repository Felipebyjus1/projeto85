var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

var carroVerde_height = 100
var carroVerde_widht = 75

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

var carroVerdeX = 5;
var carroVerdeY = 225;

function add() {
	background = new Image()
	background.onload = uploadBackground
	background.src = backgroundImage

	carroVerde = new Image()
	carroVerde.onload = uploadGreenCar
	carroVerde.src = greencarImage
}

function uploadBackground() {
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

}

function uploadGreenCar() {
	ctx.drawImage(carroVerde, carroVerdeX, carroVerdeY, carroVerde_widht, carroVerde_height)

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carroVerdeY >= 0){
		carroVerdeY = carroVerdeY - 15
		uploadBackground()
		uploadGreenCar()
	}
}

function down()
{
	if(carroVerdeY <= 300){
		carroVerdeY = carroVerdeY + 15
		uploadBackground()
		uploadGreenCar()
	}
}

function left()
{
	if(carroVerdeX >= 0){
		carroVerdeX = carroVerdeX - 15
		uploadBackground()
		uploadGreenCar()
	}
}

function right()
{
	if(carroVerdeX <= 750){
		carroVerdeX = carroVerdeX + 15
		uploadBackground()
		uploadGreenCar()
	}
}
