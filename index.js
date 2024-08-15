const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const prompt = require('prompt-sync')();

function getShape(shapeType, color) {
    switch (shapeType) {
        case 'circle':
            return new Circle(color);
        case 'square':
            return new Square(color);
        case 'triangle':
            return new Triangle(color);
        default:
            throw new Error('Invalid shape type');
    }
}

const text = prompt('Enter up to three characters for the text: ');
const textColor = prompt('Enter text color (keyword or hex code): ');
const shapeType = prompt('Choose a shape (circle, triangle, square): ');
const shapeColor = prompt('Enter shape color (keyword or hex code): ');

const shape = getShape(shapeType, shapeColor);
const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">` +
                   shape.draw(text) +
                   `</svg>`;

fs.writeFileSync('logo.svg', svgContent);
console.log('Generated logo.svg');
