state = 0;

var openX = 0;
var title = "A S H L I  B Y F I E L D";
var h1font;
var pfont;
var profImg;

function preload() {
	h1Font = loadFont("sfkingstonlight.otf");
	pFont = loadFont("bodoniitalicbt.ttf");
	profImage = loadImage("bwprofile.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	x = width/2;
	y = height/2;

	if (state==0) {
	doorButton = createButton("My Work");
  doorButton.mouseClicked(openDoor);
  doorButton.size(100,35);
  doorButton.position(x + 575, y - 375);
	doorButton.style("cursor", "pointer");
	doorButton.style("background-color", "transparent");
	doorButton.style("font-family", "Times New Roman");
	doorButton.style("color", "black");
	doorButton.style("font-size", "20px");
	doorButton.style("border", "none");

	aboutButton = createButton("About Me");
  aboutButton.mouseClicked(goToAbout);
  aboutButton.size(100,35);
  aboutButton.position(x - 675, y - 375);
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
	}

	if (state==3){
		background(255);
		shelfList();
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

function introText() {
	push();
	fill(255);
	textFont(h1Font);
	textAlign(CENTER);
	textSize(115);
	translate(x, y + 15);
	text(title, 0, 0);
	pop();

	push();
	fill(0);
	textFont(h1Font);
	textAlign(CENTER);
	textSize(115);
	translate(x - 390, y + 15);
	text("A S", 0, 0);
	pop();

	push();
	fill(0);
	textFont(h1Font);
	textAlign(CENTER);
	textSize(115);
	translate(x + 390, y + 15);
	text("L D", 0, 0);
	pop();

	push();
	fill(255);
	textFont(pFont);
	textAlign(CENTER);
	textSize(35);
	translate(x, y + 75);
	text("Creative Portfolio", 0, 0);
	pop();
}

function setDoor() {
	rectMode(CENTER);
	fill(0);

	push();
	translate(x - 150, y);
	rect(0, 0, 300, 450);
	pop();

	push();
	translate(x + 150, y);
	rect(0, 0, 300, 450);
	pop();

}

function openDoor() {
	state = 1;
	doorButton.remove();
	aboutButton.remove();

	push();
	noStroke();
	fill(255);
	translate(x,y);
	rect(0, 0, openX, 550);
	pop();
	openX = openX + 7;

	if (openX==625) {
		state = 3;
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

function shelfList() {
}

function catalogCard() {
}

function expandedShelf() {
}

function popUpBook() {
}

function goToAbout() {
	state = 2;
	doorButton.remove();
	aboutButton.remove();
}

function goToWork() {
	state = 3;
	workButton.remove();
}
