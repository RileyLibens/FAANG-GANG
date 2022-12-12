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

