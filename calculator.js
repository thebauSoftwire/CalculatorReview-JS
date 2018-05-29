const operators = ['+', '-', '*', '/'];

exports.create_calculator = function (operator) {
  const numbers = [];

  return {
    add_number: function (number) {
      numbers.push(number);
    },
    calculate: function () {
      // Return zero if there are no numbers to calculate
      if (numbers.length === 0) {
        throw 'Cannot calculate a result because no numbers were given';
      }

      let answer = numbers[0];

      let i = 0;
      numbers.forEach(function (number) {
        if (i === 0) {
          i++;
          return;
        }

        switch (operator) {
          case '+':
            answer = answer + number;
            break;
          case '-':
            answer = answer - number;
            break;
          case '/':
            answer = answer / number;
            break;
          default:
            console.log("Invalid operator " + operator);
        }
        // console.log('index: ' + index);
        // console.log('current answer: ' + answer);

        i++;
      });

      return answer;
    }
  }
}
