/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/

// Setup
showGrid(50); 
setSpeed(200);
width(5);

// Square
color(255, 0, 0);
for (let i = 0; i < 4; i++) {
  forward(250);
  right(90);
}

// Triangle
color(0, 255, 0);
left(30);
for (let i = 0; i < 2; i++) {
  forward(100);
  left(120);
}
forward(100);

// Hexagon
color(0, 0, 255);
forward(75);
right(60);
for (let i = 0; i < 5; i++) {
  forward(150);
  right(60);
}
forward(75);

// My first letter
penup();
goto(-50, -50);
right(90);
pendown();
color(255, 0, 255);
forward(125);
left(90);
forward(50);
left(90);
forward(75);
left(180);
forward(75);
left(90);
forward(50);
left(90);
forward(125);