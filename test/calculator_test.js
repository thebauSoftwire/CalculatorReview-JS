const assert = require('assert');
const chai = require('chai');
const calc = require('../calculator')

describe('calculator', function () {
  describe('#calculate()', function () {
    it('adds one number', function () {
      const calculator = calc.create_calculator('+');

      calculator.add_number(16);

      assert.equal(16, calculator.calculate());
    });

    it('adds two numbers', function () {
      const calculator = calc.create_calculator('+');

      calculator.add_number(5);
      calculator.add_number(4);

      assert.equal(9, calculator.calculate());
    });

    it('adds many numbers', function () {
      const calculator = calc.create_calculator('+');

      calculator.add_number(5);
      calculator.add_number(4);
      calculator.add_number(0);
      calculator.add_number(-20);
      calculator.add_number(1486);
      calculator.add_number(-402);
      calculator.add_number(4);

      assert.equal(1077, calculator.calculate());
    });

    it('rejects the calculation when there are no numbers', function () {
      const calculator = calc.create_calculator('+');

      chai.expect(calculator.calculate).to.throw('Cannot calculate a result because no numbers were given');
    });
  });
});
