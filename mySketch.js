// mySketch.js
let c1X, c1Y, c2X, c2Y, c3X, c3Y, c4X, c4Y, c5X, c5Y, c6X, c6Y, c7X, c7Y;

let vel1, vel2, vel3, vel4, vel5, vel6, vel7;

let dirX1, dirY1;
let dirX2, dirY2;
let dirX3, dirY3;
let dirX4, dirY4;
let dirX5, dirY5;
let dirX6, dirY6;
let dirX7, dirY7;

let cor1, cor2, cor3, cor4, cor5, cor6, cor7;

let slideIndex = 1;

function setup() {
	 showSlides(slideIndex);

	let canv = createCanvas(windowWidth, windowHeight);
	canv.parent('mySketch');

	background(100);

	// POSIÇÕES
	c1X = 10;
	c1Y = 10;

	c2X = 200;
	c2Y = 200;

	c3X = 300;
	c3Y = 300;

	c4X = 400;
	c4Y = 100;

	c5X = 500;
	c5Y = 400;

	c6X = 700;
	c6Y = 200;

	c7X = 900;
	c7Y = 500;

	// VELOCIDADES
	vel1 = 1;
	vel2 = 2;
	vel3 = 3;
	vel4 = 2.5;
	vel5 = 1.5;
	vel6 = 2.8;
	vel7 = 3.5;

	// DIREÇÕES
	dirX1 = 1;
	dirY1 = -1;

	dirX2 = -1;
	dirY2 = -1;

	dirX3 = -1;
	dirY3 = 1;

	dirX4 = 1;
	dirY4 = 1;

	dirX5 = -1;
	dirY5 = 1;

	dirX6 = 1;
	dirY6 = -1;

	dirX7 = -1;
	dirY7 = -1;

	// CORES
	cor1 = color(255, 0, 0);
	cor2 = color(0, 255, 0);
	cor3 = color(0, 0, 255);
	cor4 = color(255, 255, 0);
	cor5 = color(255, 0, 255);
	cor6 = color(0, 255, 255);
	cor7 = color(255);
}

function draw() {

	background(0);

	// MOVIMENTO
	c1X += vel1 * dirX1;
	c1Y += vel1 * dirY1;

	c2X += vel2 * dirX2;
	c2Y += vel2 * dirY2;

	c3X += vel3 * dirX3;
	c3Y += vel3 * dirY3;

	c4X += vel4 * dirX4;
	c4Y += vel4 * dirY4;

	c5X += vel5 * dirX5;
	c5Y += vel5 * dirY5;

	c6X += vel6 * dirX6;
	c6Y += vel6 * dirY6;

	c7X += vel7 * dirX7;
	c7Y += vel7 * dirY7;

	// BORDAS

	// C1
	if (c1X > width || c1X < 0) {
		dirX1 *= -1;
	}
	if (c1Y > height || c1Y < 0) {
		dirY1 *= -1;
	}

	// C2
	if (c2X > width || c2X < 0) {
		dirX2 *= -1;
	}
	if (c2Y > height || c2Y < 0) {
		dirY2 *= -1;
	}

	// C3
	if (c3X > width || c3X < 0) {
		dirX3 *= -1;
	}
	if (c3Y > height || c3Y < 0) {
		dirY3 *= -1;
	}

	// C4
	if (c4X > width || c4X < 0) {
		dirX4 *= -1;
	}
	if (c4Y > height || c4Y < 0) {
		dirY4 *= -1;
	}

	// C5
	if (c5X > width || c5X < 0) {
		dirX5 *= -1;
	}
	if (c5Y > height || c5Y < 0) {
		dirY5 *= -1;
	}

	// C6
	if (c6X > width || c6X < 0) {
		dirX6 *= -1;
	}
	if (c6Y > height || c6Y < 0) {
		dirY6 *= -1;
	}

	// C7
	if (c7X > width || c7X < 0) {
		dirX7 *= -1;
	}
	if (c7Y > height || c7Y < 0) {
		dirY7 *= -1;
	}

	// COLISÕES

	// C1 e C2
	if (dist(c1X, c1Y, c2X, c2Y) < 70) {

		cor1 = color(random(255), random(255), random(255));
		cor2 = color(random(255), random(255), random(255));

		dirX1 *= -1;
		dirY2 *= -1;
	}

	// C3 e C4
	if (dist(c3X, c3Y, c4X, c4Y) < 70) {

		cor3 = color(random(255), random(255), random(255));
		cor4 = color(random(255), random(255), random(255));

		dirX3 *= -1;
		dirY4 *= -1;
	}

	// C5 e C6
	if (dist(c5X, c5Y, c6X, c6Y) < 70) {

		cor5 = color(random(255), random(255), random(255));
		cor6 = color(random(255), random(255), random(255));

		dirX5 *= -1;
		dirY6 *= -1;
	}

	// C7 e C1
	if (dist(c7X, c7Y, c1X, c1Y) < 70) {

		cor7 = color(random(255), random(255), random(255));
		cor1 = color(random(255), random(255), random(255));

		dirX7 *= -1;
		dirY1 *= -1;
	}

	// DESENHAR

	fill(cor1);
	circle(c1X, c1Y, 80);

	fill(cor2);
	circle(c2X, c2Y, 60);

	fill(cor3);
	circle(c3X, c3Y, 70);

	fill(cor4);
	circle(c4X, c4Y, 90);

	fill(cor5);
	circle(c5X, c5Y, 50);

	fill(cor6);
	circle(c6X, c6Y, 100);

	fill(cor7);
	circle(c7X, c7Y, 75);
}
    // ===== JAVASCRIPT DO SLIDESHOW (adaptado do W3Schools) =====
    //let slideIndex = 1;
    //showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }