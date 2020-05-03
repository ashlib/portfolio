state = 0;

var openX = 0;
var title = "A S H L I  B Y F I E L D";

function preload() {
	h1Font = loadFont("sfkingstonlight.otf");
	pFont = loadFont("bodoniitalicbt.ttf");
	profImage = loadImage("bwprofile.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	x = width/2;
	y = height/2;

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

		codeButton = createButton("CODING");
		codeButton.mouseClicked(showShelfOne);
		codeButton.size(width, y);
		codeButton.position(0, 0);
		codeButton.style("cursor", "pointer");
		codeButton.style("background-color", "black");
		codeButton.style("opacity", ".25");
		codeButton.style("font-family", "Times New Roman");
		codeButton.style("color", "white");
		codeButton.style("font-size", "20px");
		codeButton.style("border", "solid");
		codeButton.style("border-color", "black");

		designButton = createButton("GRAPHIC DESIGN & ILLUSTRATION");
		designButton.mouseClicked(showShelfTwo);
		designButton.size(width, y);
		designButton.position(0, 345);
		designButton.style("cursor", "pointer");
		designButton.style("background-color", "black");
		designButton.style("opacity", ".25");
		designButton.style("font-family", "Times New Roman");
		designButton.style("color", "white");
		designButton.style("font-size", "20px");
		designButton.style("border", "solid");
		designButton.style("border-color", "black");
}

function draw() {
	if (state==0){
		background(255);
		setDoor();
		introText();
		codeButton.hide();
		designButton.hide();
	}

	if (state==1){
		background(255);
		setDoor();
		openDoor();
		codeButton.hide();
		designButton.hide();
	}

	if (state==2){
		background(255);
		about();
		aboutButton.hide();
		codeButton.hide();
		designButton.hide();
	}

	if (state==3){
		background(255);
		shelfBackground();
		shelfOne();
		shelfTwo();
	}

	if (state==4){
		background(255);
		catalogCards();
	}

	if (state==5){
		background(255);
		expandedShelf();
	}

	if (state==6){
		background(255);
		popUpBook();
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

	push();
	line(width, y, -width, y);
	pop();

	codeButton.show();
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

	designButton.show();
}

function showShelfOne() {
	codeButton.hide();
	designButton.show();
}

function showShelfTwo() {
	codeButton.show();
	designButton.hide();
}

function catalogCard() {
}

function expandedShelf() {
}

function popUpBook() {
}

function goToAbout() {
	state = 2;
}
