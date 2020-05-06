state = 3;

var openX = 0;
var title = "A S H L I  B Y F I E L D";

function preload() {
	h1Font = loadFont("sfkingstonlight.otf");
	pFont = loadFont("bodoniitalicbt.ttf");
	profImage = loadImage("bwprofile.jpg");
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	x = width/2;
	y = height/2;

	if (state==0) {
		doorButton = createButton("My Work");
		doorButton.mouseClicked(openDoor);
		doorButton.size(100,35);
		doorButton.position(x + 575, y - 325);
		doorButton.style("cursor", "pointer");
		doorButton.style("background-color", "transparent");
		doorButton.style("font-family", "Times New Roman");
		doorButton.style("color", "black");
		doorButton.style("font-size", "20px");
		doorButton.style("border", "none");

		aboutButton = createButton("About Me");
		aboutButton.mouseClicked(goToAbout);
		aboutButton.size(100,35);
		aboutButton.position(x - 675, y - 325);
		aboutButton.style("cursor", "pointer");
		aboutButton.style("background-color", "transparent");
		aboutButton.style("font-family", "Times New Roman");
		aboutButton.style("color", "black");
		aboutButton.style("font-size", "20px");
		aboutButton.style("border", "none");
	}
}

function draw() {

	if (state==0){
		background(255);
		setDoor();
		introText();
	}

	if (state==1){
		background(255);
		setDoor();
		openDoor();
	}

	if (state==2){
		background(255);
		about();
		aboutButton.hide();
	}

	if (state==3){
		noLoop();
		background(255);
		shelfBackground();
		shelfOne();
		shelfTwo();
		shelfButtons();
	}

	if (state==4) {
		background(255);
		shelfOne();
		shelfTwo();
		shelfButtons();
		popUp();
	}
}

function about() {
	push();
	fill(0);
	textFont(pFont);
	textAlign(CENTER);
	textSize(45);
	translate(x + 175, y - 194);
	text("About the Creator", 0, 0);
	pop();

	push();
	imageMode(CENTER);
	translate(x - 250, y);
	image(profImage, 0, 0, 368, 450);
	pop();

	push();
	fill(0);
	textFont("Times New Roman");
	textAlign(LEFT);
	textSize(24);
	translate(x, y - 150);
	textLeading(38);
	text("———————————— \nHi, my name is Ashli and I am a creator. \nCurrently an NYU student studying \nIntegrated Digital Media, \nI am cultivaing skills in coding, design, \nand illustration. On this portfolio \nsite, made by yours truly, you will find the \nwork I've done both before and during \nmy studies. It is my hope that you will not only \nsee my talent, but my growth. \n————————————", 0, 0);
	pop();
}

function setDoor() {
	rectMode(CENTER);
	fill(0);

	push();
	translate(x - 150, y + 15);
	rect(0, 0, 300, 450);
	pop();

	push();
	translate(x + 150, y + 15);
	rect(0, 0, 300, 450);
	pop();
}

function openDoor() {
	state = 1;
	doorButton.hide();
	aboutButton.hide();

	push();
	noStroke();
	fill(255);
	translate(x,y);
	rect(0, 0, openX, 550);
	pop();
	openX = openX + 7;

	if (openX>=625) {
		push();
		fill(0);
		textFont(pFont);
		textAlign(CENTER);
		textSize(75);
		translate(x, y + 25);
		text("WELCOME", 0, 0);
		pop();
	}

	if (openX>=1250) {
		state = 3;
	}
}

function introText() {
	push();
	fill(255);
	textFont(h1Font);
	textAlign(CENTER);
	textSize(115);
	translate(x, y + 25);
	text(title, 0, 0);
	pop();

	push();
	fill(0);
	textFont(h1Font);
	textAlign(CENTER);
	textSize(115);
	translate(x - 375, y + 25);
	text("A S", 0, 0);
	pop();

	push();
	fill(0);
	textFont(h1Font);
	textAlign(CENTER);
	textSize(115);
	translate(x + 375, y + 25);
	text("L D", 0, 0);
	pop();

	push();
	fill(255);
	textFont(pFont);
	textAlign(CENTER);
	textSize(35);
	translate(x, y + 90);
	text("Creative Portfolio", 0, 0);
	pop();
}

function shelfBackground() {
	push();
	noStroke();
	fill(44, 100, 66);
	translate(x, 0);
	rect(0, 0, width, y);
	pop();

	push();
	noStroke();
	fill(165, 122, 150);
	translate(x, y);
	rect(0, 0, width, y);
	pop();

	push();
	noStroke();
	fill(86, 100, 137);
	translate(x, y + 470);
	rect(0, 0, width, y);
	pop();
}

function shelfOne() {
	stroke(0);
	strokeWeight(5);

	rectMode(CENTER);

	push();
	fill(255);
	translate(x - 725, y - 150);
	rect(0, 0, 65, 300);
	pop();

	push();
	fill(255);
	translate(x - 655, y - 125);
	rect(0, 0, 75, 250);
	pop();

	push();
	fill(255);
	translate(x - 590, y - 162);
	rect(0, 0, 60, 325);
	pop();

	push();
	fill(255);
	translate(x - 527, y - 150);
	rect(0, 0, 65, 300);
	pop();

	push();
	fill(255);
	translate(x - 473, y - 162);
	rect(0, 0, 45, 325);
	pop();

	push();
	fill(255);
	translate(x - 415, y - 170);
	rect(0, 0, 75, 340);
	pop();

	push();
	fill(255);
	translate(x - 335, y - 150);
	rect(0, 0, 85, 300);
	pop();

	push();
	fill(255);
	translate(x - 250, y - 150);
	rect(0, 0, 85, 300);
	pop();

	push();
	fill(255);
	translate(x - 165, y - 125);
	rect(0, 0, 85, 250);
	pop();

	push();
	fill(255);
	translate(x - 100, y - 162);
	rect(0, 0, 50, 325);
	pop();

	push();
	fill(255);
	translate(x - 32, y - 150);
	rect(0, 0, 85, 300);
	pop();

	push();
	fill(255);
	translate(x + 41, y - 125);
	rect(0, 0, 60, 250);
	pop();

	push();
	fill(255);
	translate(x + 127, y - 150);
	rect(0, 0, 110, 300);
	pop();

	push();
	fill(255);
	translate(x + 223, y - 157);
	rect(0, 0, 80, 315);
	pop();

	push();
	fill(255);
	translate(x + 300, y - 162);
	rect(0, 0, 85, 325);
	pop();

	push();
	fill(255);
	translate(x + 365, y - 168);
	rect(0, 0, 45, 335);
	pop();

	push();
	fill(255);
	translate(x + 443, y - 150);
	rect(0, 0, 110, 300);
	pop();

	push();
	fill(255);
	translate(x + 533, y - 163);
	rect(0, 0, 70, 325);
	pop();

	push();
	fill(255);
	translate(x + 593, y - 138);
	rect(0, 0, 50, 275);
	pop();

	push();
	fill(255);
	translate(x + 668, y - 125);
	rect(0, 0, 100, 250);
	pop();

	push();
	fill(255);
	translate(x + 743, y - 155);
	rect(0, 0, 50, 310);
	pop();

	proj1 = createButton("");
	proj1.mouseClicked(popUp);
	proj1.size(60, 325);
	proj1.position(x - 620, y - 325);
	proj1.style("cursor", "pointer");
	proj1.style("background-color", "black");
	proj1.style("font-family", "Times New Roman");
	proj1.style("color", "white");
	proj1.style("font-size", "20px");
	proj1.style("border", "solid");
	proj1.style("border-color", "white");
	proj1.style("border-width", "3.5px");

	push();
	strokeWeight(5);
	line(width, y, -width, y);
	pop();
}

function shelfTwo() {
	push();
	translate(0, y + 5);
	shelfOne();
	pop();

	push();
	stroke(0);
	strokeWeight(5);
	translate(0, y + 500);
	line(width, y, -width, y);
	pop();
}

function shelfButtons() {
		graphButton = createButton("GRAPHIC DESIGN");
		graphButton.mouseClicked(showShelfOne);
		graphButton.size(width, y);
		graphButton.position(0, 0);
		graphButton.style("cursor", "pointer");
		graphButton.style("background-color", "black");
		graphButton.style("opacity", ".25");
		graphButton.style("font-family", "Times New Roman");
		graphButton.style("color", "white");
		graphButton.style("font-size", "20px");
		graphButton.style("border", "solid");
		graphButton.style("border-color", "black");

		illusButton = createButton("DIGITAL ILLUSTRATION");
		illusButton.mouseClicked(showShelfTwo);
		illusButton.size(width, y);
		illusButton.position(0, 345);
		illusButton.style("cursor", "pointer");
		illusButton.style("background-color", "black");
		illusButton.style("opacity", ".25");
		illusButton.style("font-family", "Times New Roman");
		illusButton.style("color", "white");
		illusButton.style("font-size", "20px");
		illusButton.style("border", "solid");
		illusButton.style("border-color", "black");
	}

function showShelfOne() {
	graphButton.hide();
	illusButton.show();
}

function showShelfTwo() {
	graphButton.show();
	illusButton.hide();
}

function popUp() {
	state = 4;

	push();
	fill(255);
	translate(x, y);
	rect(0, 0, 500, 500);
	pop();
}

function goToAbout() {
	state = 2;
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
