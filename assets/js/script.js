/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: HTML 5 Canvas
(c) Copyright by BRS with Nyros. 
**/

/* Get Our Elements */
// const canvas = document.getElementById("draw");
// canvas.width = canvas.clientWidth;
// canvas.height = canvas.clientHeight;

// const ctx = canvas.getContext("2d"); // 2 prams - context type and context attributes

// // Default theme
// let chathams_blue = "#1A4B84";

// // Apply some properties to ctx
// ctx.strokeStyle = "#BADA55";
// ctx.lineJoin = "round";
// ctx.lineCap = "round";
// ctx.lineWidth = 10;

// // Init
// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// let hue = 0;

// function draw(e) {
//   if (!isDrawing) return; // Check for mouse click
//   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

//   ctx.beginPath(); //Begin a new path

//   // Start drawing the line
//   ctx.moveTo(lastX, lastY);
//   console.log(`LAST X - ${lastX}`);
//   console.log(`LAST Y - ${lastY}`);

//   // Go to current mouse location
//   ctx.lineTo(e.offsetX, e.offsetY);
//   console.log(`CURRENT X - ${e.offsetX}`);
//   console.log(`CURRENT Y - ${e.offsetY}`);

//   ctx.stroke();
//   [lastX, lastY] = [e.offsetX, e.offsetY];

//   hue++;
//   if (hue >= 360) {
//     hue = 0;
//   }
// }

// // Event Listeners
// canvas.addEventListener("mousedown", e => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY]; //Mouse cursor's coordinates
// });

// canvas.addEventListener("mousemove", draw);
// canvas.addEventListener("mouseup", () => (isDrawing = false));
// canvas.addEventListener("mouseout", () => (isDrawing = false));

// Set theme
// function setTheme(theme) {
//   document.documentElement.style.setProperty("--primary-color", theme);
//   localStorage.setItem("movie-theme", theme);
// }
// setTheme(localStorage.getItem("movie-theme") || chathams_blue);

// console.log("hello world");

// let num = 10;
// num == 10;

// function addNum(a = 10, b = 20) {
//   return a + b;
// }

// Get canvas element and context
const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

// Get color picker and clear button elements
const colorPicker = document.getElementById("colorPicker");
const clearButton = document.getElementById("clearButton");

// Set initial drawing color
let drawColor = colorPicker.value;

// Variable to track if mouse is being pressed
let isDrawing = false;

// Event listener for color picker input
colorPicker.addEventListener("input", function() {
  drawColor = this.value; // Update draw color
});

// Event listener for clear button click event
clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
});

// Function to get mouse position relative to the canvas
function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

// Event listener for mouse down event
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  const pos = getMousePos(e);
  ctx.strokeStyle = drawColor; // Set stroke color
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 5;
  ctx.beginPath(); // Start a new path
  ctx.moveTo(pos.x, pos.y); // Move to starting point
});

// Event listener for mouse move event
canvas.addEventListener("mousemove", e => {
  if (isDrawing) {
    const pos = getMousePos(e);
    ctx.lineTo(pos.x, pos.y); // Draw line to current point
    ctx.stroke(); // Stroke the path
  }
});

// Event listener for mouse up event
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Function to draw
function draw(e) {
  if (!isDrawing) return; // Stop if not drawing
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.strokeStyle = drawColor; // Set stroke color
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 5;
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath(); // Start a new path for continuous drawing
  ctx.moveTo(x, y);
}
