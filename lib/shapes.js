const svgNS = 'http://www.w3.org/2000/svg';

class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        throw new Error('Method "draw()" must be implemented.');
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    draw(text) {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />` +
               `<text x="150" y="120" font-size="30" text-anchor="middle" fill="black">${text}</text>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    draw(text) {
        return `<rect x="70" y="50" width="160" height="100" fill="${this.color}" />` +
               `<text x="150" y="120" font-size="30" text-anchor="middle" fill="black">${text}</text>`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    draw(text) {
        return `<polygon points="150,30 270,170 30,170" fill="${this.color}" />` +
               `<text x="150" y="120" font-size="30" text-anchor="middle" fill="black">${text}</text>`;
    }
}

module.exports = { Circle, Square, Triangle };
