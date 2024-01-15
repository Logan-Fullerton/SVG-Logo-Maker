
const {triangle,circle,square} = require('./shapes.js');

describe ('triangle', () => {
    test('should return a triangle', () => {
        let shape = new triangle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`polygon points="50,0 100,100 0,100" style="fill:red;"`);
    }
    );
});
describe ('circle', () => {
    test('should return a circle', () => {
        let shape = new circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`circle cx="50" cy="50" r="40" style="fill:red;"`);
    }
    );
});
describe ('square', () => {
    test('should return a square', () => {
        let shape = new square();
        shape.setColor('red');
        expect(shape.render()).toEqual(`rect width="100" height="100" style="fill:red;"`);
    }
    );
});