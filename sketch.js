// Declare a variable for the image
let img;

function preload() {
  // Load the image in the preload() function
  img = loadImage("https://i.imgur.com/GkbtYrG.png");
}

function setup() {
  // Create a canvas to draw the image on
  createCanvas(3000, 3000);

  // Set the image alignment mode to center
  imageMode(CENTER);
}

function draw() {
  // Clear the canvas
  clear();

  // Use the image() function to draw the image at the cursor position,
  // with the desired width and height
  image(img, mouseX, mouseY, 55, 35);
}

let slideIndex = 1;
showSlides(slideIndex);

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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

        