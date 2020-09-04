'use strict';
//create class Shape answers for create canvas node
class Shape {

    setCanvas(width, height){
        this.canvas = document.createElement('canvas');
        document.getElementById('cnvs').append(this.canvas);
        this.canvas.width = width;
        this.canvas.height = height;
    }
}
//create class Circle for drawing item circle
class Circle extends Shape {

    draw(x, y) {
        this.ctx = document.querySelector('canvas').getContext('2d');
        this.ctx.beginPath();
        this.ctx.arc(x, y, 100, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }
}
//create class Square for drawing item square
class Square extends Shape {

    draw(x, y) {
         
        this.ctx = document.querySelector('canvas').getContext('2d');
        this.ctx.beginPath();
        this.ctx.rect(x, y, 200, 200);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }
}
//create class Triangle for drawing item triangle
class Triangle extends Shape{

    draw(x, y) {
        this.ctx = document.querySelector('canvas').getContext('2d');
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x+100, y-200);
        this.ctx.lineTo(x+200, y);
        this.ctx.fillStyle = "yellow";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

//create object circle, element canvas and drawing circle
let circle = new Circle();
circle.setCanvas(600, 200);
circle.draw(320, 100);

//create object square and drawing square
let square = new Square ();
square.draw(0, 0);

//create object triangle and drawing triangle
let triangle = new Triangle();
triangle.draw(400, 200);