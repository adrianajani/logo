const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
    it('should create a Circle', () => {
        const circle = new Circle('red');
        expect(circle.draw('A')).toContain('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    it('should create a Square', () => {
        const square = new Square('green');
        expect(square.draw('B')).toContain('<rect x="70" y="50" width="160" height="100" fill="green" />');
    });

    it('should create a Triangle', () => {
        const triangle = new Triangle('blue');
        expect(triangle.draw('C')).toContain('<polygon points="150,30 270,170 30,170" fill="blue" />');
    });
});
