state = 0;

var openX = 0;
var title = "A S H L I  B Y F I E L D";

function preload() {
	h1Font = loadFont("sfkingstonlight.otf");
	pFont = loadFont("bodoniitalicbt.ttf");
	profImage = loadImage("bwprofile.jpg");


}

function setup() {
	createCanvas(1350, 650);

	x = width/2;
	y = height/2;

	if (state==0) {
		doorButton = createButton("My Work");
		doorButton.mouseClicked(openDoor);
		doorButton.size(100,35);
		doorButton.position(x + 575, y - 300);
		doorButton.style("cursor", "pointer");
		doorButton.style("background-color", "transparent");
		doorButton.style("font-family", "Times New Roman");
		doorButton.style("color", "black");
		doorButton.style("font-size", "20px");
		doorButton.style("border", "none");

		aboutButton = createButton("About Me");
		aboutButton.mouseClicked(goToAbout);
		aboutButton.size(100,35);
		aboutButton.position(x - 675, y - 300);
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

		illusButton = createButton("DIGITAL ILLUSTRATION");
		illusButton.mouseClicked(expandShelfOne);
		illusButton.size(width, y);
		illusButton.position(0, 0);
		illusButton.style("cursor", "pointer");
		illusButton.style("background-color", "black");
		illusButton.style("opacity", ".25");
		illusButton.style("font-family", "Times New Roman");
		illusButton.style("color", "white");
		illusButton.style("font-size", "20px");
		illusButton.style("border", "solid");
		illusButton.style("border-color", "black");

		graphButton = createButton("GRAPHIC DESIGN");
		graphButton.mouseClicked(expandShelfTwo);
		graphButton.size(width, y);
		graphButton.position(0, 325);
		graphButton.style("cursor", "pointer");
		graphButton.style("background-color", "black");
		graphButton.style("opacity", ".25");
		graphButton.style("font-family", "Times New Roman");
		graphButton.style("color", "white");
		graphButton.style("font-size", "20px");
		graphButton.style("border", "solid");
		graphButton.style("border-color", "black");

		backButton = createButton("⇦");
		backButton.mouseClicked(goBack);
		backButton.size(35,35);
		backButton.position(x - 670, y - 300);
		backButton.style("cursor", "pointer");
		backButton.style("background-color", "black");
		backButton.style("font-family", "Times New Roman");
		backButton.style("color", "white");
		backButton.style("font-size", "20px");
		backButton.style("border", "none");
	}

	if (state==4) {
	}

	if (state==5) {
	}
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

function goToAbout() {
	state = 2;
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
}

function shelfOne() {
	stroke(0);
	strokeWeight(5);

	rectMode(CENTER);

	push();
	fill(255);
	translate(x - 655, y - 123);
	rect(0, 0, 75, 245);
	pop();

	push();
	fill(255);
	translate(x - 595, y - 150);
	rect(0, 0, 65, 300);
	pop();

	push();
	fill(255);
	translate(x - 530, y - 145);
	rect(0, 0, 65, 290);
	pop();

	push();
	fill(255);
	translate(x - 455, y - 152.5);
	rect(0, 0, 85, 305);
	pop();

	push();
	fill(255);
	translate(x - 370, y - 142.5);
	rect(0, 0, 85, 285);
	pop();

	push();
	fill(255);
	translate(x - 285, y - 142.5);
	rect(0, 0, 85, 285);
	pop();

	push();
	fill(255);
	translate(x - 210, y - 115);
	rect(0, 0, 65, 230);
	pop();

	push();
	fill(255);
	translate(x - 150, y - 155);
	rect(0, 0, 55, 310);
	pop();

	push();
	fill(255);
	translate(x - 95, y - 150);
	rect(0, 0, 55, 300);
	pop();

	push();
	fill(255);
	translate(x - 20, y - 125);
	rect(0, 0, 95, 250);
	pop();

	push();
	fill(255);
	translate(x + 50, y - 132.5);
	rect(0, 0, 45, 265);
	pop();

	push();
	fill(255);
	translate(x + 127.5, y - 140);
	rect(0, 0, 110, 280);
	pop();

	push();
	fill(255);
	translate(x + 222.5, y - 157.5);
	rect(0, 0, 80, 315);
	pop();

	push();
	fill(255);
	translate(x + 305, y - 150);
	rect(0, 0, 85, 300);
	pop();

	push();
	fill(255);
	translate(x + 369, y - 157.5);
	rect(0, 0, 45, 315);
	pop();

	push();
	fill(255);
	translate(x + 431.5, y - 150);
	rect(0, 0, 80, 300);
	pop();

	push();
	fill(255);
	translate(x + 506.5, y - 155);
	rect(0, 0, 70, 310);
	pop();

	push();
	fill(255);
	translate(x + 574, y - 127.5);
	rect(0, 0, 65, 255);
	pop();

	push();
	fill(255);
	translate(x + 651.5, y - 135);
	rect(0, 0, 90, 270);
	pop();
}

function shelfTwo() {
	push();
	translate(0, y);
	shelfOne();
	pop();
}

function expandShelfOne() {
	state = 4;

	background(44, 100, 66);

	graphButton.hide();
	illusButton.hide();

	push();
	shelfOne();
	pop();

	push();
	translate(0, y + 5);
	shelfOne();
	pop();

	proj1 = createButton("");
		proj1.mouseClicked(openPopUp1);
		proj1.size(65, 300);
		proj1.position(x - 628, y - 300);
		proj1.style("cursor", "pointer");
		proj1.style("background-color", "black");
		proj1.style("font-family", "Times New Roman");
		proj1.style("color", "white");
		proj1.style("font-size", "20px");
		proj1.style("border", "none");

		proj2 = createButton("");
		proj2.mouseClicked(openPopUp2);
		proj2.size(85, 285);
		proj2.position(x - 412, y + 40);
		proj2.style("cursor", "pointer");
		proj2.style("background-color", "black");
		proj2.style("font-family", "Times New Roman");
		proj2.style("color", "white");
		proj2.style("font-size", "20px");
		proj2.style("border", "none");

		proj3 = createButton("");
		proj3.mouseClicked(openPopUp3);
		proj3.size(70, 310);
		proj3.position(x + 472, y - 310);
		proj3.style("cursor", "pointer");
		proj3.style("background-color", "black");
		proj3.style("font-family", "Times New Roman");
		proj3.style("color", "white");
		proj3.style("font-size", "20px");
		proj3.style("border", "none");

		proj4 = createButton("");
		proj4.mouseClicked(openPopUp4);
		proj4.size(45, 315);
		proj4.position(x + 346, y + 10);
		proj4.style("cursor", "pointer");
		proj4.style("background-color", "black");
		proj4.style("font-family", "Times New Roman");
		proj4.style("color", "white");
		proj4.style("font-size", "20px");
		proj4.style("border", "none");

		backButton = createButton("⇦");
		backButton.mouseClicked(goBack);
		backButton.size(35,35);
		backButton.position(x - 670, y - 300);
		backButton.style("cursor", "pointer");
		backButton.style("background-color", "black");
		backButton.style("font-family", "Times New Roman");
		backButton.style("color", "white");
		backButton.style("font-size", "20px");
		backButton.style("border", "none");
}

function expandShelfTwo() {
	state = 5;

	illusButton.hide();
	graphButton.hide();

	background(165, 122, 150);

	push();
	shelfOne();
	pop();

	push();
	translate(0, y + 5);
	shelfOne();
	pop();

	proj1 = createButton("");
	proj1.mouseClicked(openPopUp5);
	proj1.size(65, 300);
	proj1.position(x - 628, y - 300);
	proj1.style("cursor", "pointer");
	proj1.style("background-color", "black");
	proj1.style("font-family", "Times New Roman");
	proj1.style("color", "white");
	proj1.style("font-size", "20px");
	proj1.style("border", "none");

	proj2 = createButton("");
	proj2.mouseClicked(openPopUp6);
	proj2.size(85, 285);
	proj2.position(x - 412, y + 40);
	proj2.style("cursor", "pointer");
	proj2.style("background-color", "black");
	proj2.style("font-family", "Times New Roman");
	proj2.style("color", "white");
	proj2.style("font-size", "20px");
	proj2.style("border", "none");

	proj3 = createButton("");
	proj3.mouseClicked(openPopUp7);
	proj3.size(70, 310);
	proj3.position(x + 472, y - 310);
	proj3.style("cursor", "pointer");
	proj3.style("background-color", "black");
	proj3.style("font-family", "Times New Roman");
	proj3.style("color", "white");
	proj3.style("font-size", "20px");
	proj3.style("border", "none");

	backButton = createButton("⇦");
	backButton.mouseClicked(goBack);
	backButton.size(35,35);
	backButton.position(x - 670, y - 300);
	backButton.style("cursor", "pointer");
	backButton.style("background-color", "black");
	backButton.style("font-family", "Times New Roman");
	backButton.style("color", "white");
	backButton.style("font-size", "20px");
	backButton.style("border", "none");

}

function openPopUp1() {
	push();
	fill(255);
	translate(x, y);
	strokeWeight(5);
	rect(0, 0, 500, 500);
	pop();

	greekGif = createImg("greek.gif", "Loading Issue");
	greekGif.position(x - 150, y - 225);
	greekGif.size(275,350);

	textBox1 = createButton("GREEK GODDESSES <br> <br> I made these illustrations of the greek gods and godesses for an in-class coding assignment.");
	textBox1.size(400,50);
	textBox1.position(x - 200, y + 140);
	textBox1.style("background-color", "transparent");
	textBox1.style("font-family", "Times New Roman");
	textBox1.style("color", "black");
	textBox1.style("font-size", "20px");
	textBox1.style("border", "none");

	closeButton = createButton("Close");
	closeButton.mouseClicked(closePopUp1);
	closeButton.size(100,35);
	closeButton.position(x + 550, y + 250);
	closeButton.style("cursor", "pointer");
	closeButton.style("background-color", "black");
	closeButton.style("font-family", "Times New Roman");
	closeButton.style("color", "white");
	closeButton.style("font-size", "20px");
	closeButton.style("border", "none");
}

function openPopUp2() {
	push();
	fill(255);
	translate(x, y);
	strokeWeight(5);
	rect(0, 0, 500, 500);
	pop();

	barbieGif = createImg("barbie.gif", "Loading Issue");
	barbieGif.position(x - 125, y - 200);
	barbieGif.size(275, 300);

	textBox2 = createButton("BARBIE LOGO REDESIGN <br> <br> As a part of a weekly creative output, I redesigned various company logos. This was my take on Barbie's.");
	textBox2.size(450,50);
	textBox2.position(x - 220, y + 135);
	textBox2.style("background-color", "transparent");
	textBox2.style("font-family", "Times New Roman");
	textBox2.style("color", "black");
	textBox2.style("font-size", "20px");
	textBox2.style("border", "none");

	closeButton = createButton("Close");
	closeButton.mouseClicked(closePopUp2);
	closeButton.size(100,35);
	closeButton.position(x + 550, y + 250);
	closeButton.style("cursor", "pointer");
	closeButton.style("background-color", "black");
	closeButton.style("font-family", "Times New Roman");
	closeButton.style("color", "white");
	closeButton.style("font-size", "20px");
	closeButton.style("border", "none");
}


function openPopUp3() {
	push();
	fill(255);
	translate(x, y);
	strokeWeight(5);
	rect(0, 0, 500, 500);
	pop();

	spaceImg = createImg("prophets.png", "Loading Issue");
	spaceImg.position(x - 150, y - 225);
	spaceImg.size(300, 325);

	textBox3 = createButton("SPACE PROPHETS <br> <br> Meet Raghnall, Bazala, and Thaddia, the Prophets of the DaVinci Galaxy! (This is character art for an online game I created and published on the internet at https://ashlib.github.io/space_futures/)");
	textBox3.size(500,75);
	textBox3.position(x - 250, y + 100);
	textBox3.style("background-color", "transparent");
	textBox3.style("font-family", "Times New Roman");
	textBox3.style("color", "black");
	textBox3.style("font-size", "20px");
	textBox3.style("border", "none");

	closeButton = createButton("Close");
	closeButton.mouseClicked(closePopUp3);
	closeButton.size(100,35);
	closeButton.position(x + 550, y + 250);
	closeButton.style("cursor", "pointer");
	closeButton.style("background-color", "black");
	closeButton.style("font-family", "Times New Roman");
	closeButton.style("color", "white");
	closeButton.style("font-size", "20px");
	closeButton.style("border", "none");
}


function openPopUp4() {
	push();
	fill(255);
	translate(x, y);
	strokeWeight(5);
	rect(0, 0, 500, 500);
	pop();

	hpGif = createImg("hp.gif", "Loading Issue");
	hpGif.position(x - 125, y - 225);
	hpGif.size(250, 325);

	textBox4 = createButton("HARRY POTTER ADVENTURE GAME <br> <br> Illustrations created for a Harry Potter themed choose-your-own-adventure game.");
	textBox4.size(450,50);
	textBox4.position(x - 220, y + 135);
	textBox4.style("background-color", "transparent");
	textBox4.style("font-family", "Times New Roman");
	textBox4.style("color", "black");
	textBox4.style("font-size", "20px");
	textBox4.style("border", "none");

	closeButton = createButton("Close");
	closeButton.mouseClicked(closePopUp4);
	closeButton.size(100,35);
	closeButton.position(x + 550, y + 250);
	closeButton.style("cursor", "pointer");
	closeButton.style("background-color", "black");
	closeButton.style("font-family", "Times New Roman");
	closeButton.style("color", "white");
	closeButton.style("font-size", "20px");
	closeButton.style("border", "none");
}


function openPopUp5() {
	push();
	fill(255);
	translate(x, y);
	strokeWeight(5);
	rect(0, 0, 500, 500);
	pop();

	dmGif = createImg("dm.gif", "Loading Issue");
	dmGif.position(x - 125, y - 225);
	dmGif.size(225, 300);

	textBox5 = createButton("DESIGN MENTORSHIP ACTIVITY <br> <br> A series of design exercises between myself and a collaborator. Every other week, we exchanged a layout to be redesigned by the other using only the existing elements on the page (Mine: 2 & 4).");
	textBox5.size(500, 50);
	textBox5.position(x - 250, y + 100);
	textBox5.style("background-color", "transparent");
	textBox5.style("font-family", "Times New Roman");
	textBox5.style("color", "black");
	textBox5.style("font-size", "20px");
	textBox5.style("border", "none");

	closeButton = createButton("Close");
	closeButton.mouseClicked(closePopUp5);
	closeButton.size(100,35);
	closeButton.position(x + 550, y + 250);
	closeButton.style("cursor", "pointer");
	closeButton.style("background-color", "black");
	closeButton.style("font-family", "Times New Roman");
	closeButton.style("color", "white");
	closeButton.style("font-size", "20px");
	closeButton.style("border", "none");
}


function openPopUp6() {
	push();
	fill(255);
	translate(x, y);
	strokeWeight(5);
	rect(0, 0, 500, 500);
	pop();

	cardsGif = createImg("cards.gif", "Loading Issue");
	cardsGif.position(x - 140, y - 225);
	cardsGif.size(275, 300);

	textBox6 = createButton("PLAYING CARDS <br> <br> Celestial-themed playing cards completely designed and illustrtaed by me.");
	textBox6.size(500, 50);
	textBox6.position(x - 250, y + 125);
	textBox6.style("background-color", "transparent");
	textBox6.style("font-family", "Times New Roman");
	textBox6.style("color", "black");
	textBox6.style("font-size", "20px");
	textBox6.style("border", "none");

	closeButton = createButton("Close");
	closeButton.mouseClicked(closePopUp6);
	closeButton.size(100,35);
	closeButton.position(x + 550, y + 250);
	closeButton.style("cursor", "pointer");
	closeButton.style("background-color", "black");
	closeButton.style("font-family", "Times New Roman");
	closeButton.style("color", "white");
	closeButton.style("font-size", "20px");
	closeButton.style("border", "none");
}

function openPopUp7() {
	push();
	fill(255);
	translate(x, y);
	strokeWeight(5);
	rect(0, 0, 500, 500);
	pop();

	menuGif = createImg("menu.gif", "Loading Issue");
	menuGif.position(x - 140, y - 225);
	menuGif.size(275, 315);

	textBox7 = createButton("JUNIOR'S MENU <br> <br> Re-designed the Junior's menu for a class assignment.");
	textBox7.size(500, 50);
	textBox7.position(x - 250, y + 125);
	textBox7.style("background-color", "transparent");
	textBox7.style("font-family", "Times New Roman");
	textBox7.style("color", "black");
	textBox7.style("font-size", "20px");
	textBox7.style("border", "none");

	closeButton = createButton("Close");
	closeButton.mouseClicked(closePopUp7);
	closeButton.size(100,35);
	closeButton.position(x + 550, y + 250);
	closeButton.style("cursor", "pointer");
	closeButton.style("background-color", "black");
	closeButton.style("font-family", "Times New Roman");
	closeButton.style("color", "white");
	closeButton.style("font-size", "20px");
	closeButton.style("border", "none");
}

function closePopUp1() {
	clear();
	closeButton.hide();
	textBox1.hide();
	greekGif.hide();

	if (state==4) {
		expandShelfOne();
	}

	if (state==5) {
		expandShelfTwo();
	}
}

function closePopUp2() {
	clear();
	closeButton.hide();
	textBox2.hide();
	barbieGif.hide();

	if (state==4) {
		expandShelfOne();
	}

	if (state==5) {
		expandShelfTwo();
	}
}

function closePopUp3() {
	clear();
	closeButton.hide();
	textBox3.hide();
	spaceImg.hide();

	if (state==4) {
		expandShelfOne();
	}

	if (state==5) {
		expandShelfTwo();
	}
}

function closePopUp4() {
	clear();
	closeButton.hide();
	textBox4.hide();
	hpGif.hide();

	if (state==4) {
		expandShelfOne();
	}

	if (state==5) {
		expandShelfTwo();
	}
}

function closePopUp5() {
	clear();
	closeButton.hide();
	textBox5.hide();
	dmGif.hide();


	if (state==4) {
		expandShelfOne();
	}

	if (state==5) {
		expandShelfTwo();
	}
}

function closePopUp6() {
	clear();
	closeButton.hide();
	textBox6.hide();
	cardsGif.hide();

	if (state==4) {
		expandShelfOne();
	}

	if (state==5) {
		expandShelfTwo();
	}
}

function closePopUp7() {
	clear();
	closeButton.hide();
	textBox7.hide();
	menuGif.hide();


	if (state==4) {
		expandShelfOne();
	}

	if (state==5) {
		expandShelfTwo();
	}
}

function goBack() {
	newState = true;

	if (newState==true) {
		state = 0;
	}

	print("hih");

}

function windowResized() {
   resizeCanvas(window.innerWidth, window.innerHeight);
}
