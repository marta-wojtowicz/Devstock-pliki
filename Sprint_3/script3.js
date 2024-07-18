const number1 = 10
const number2 = 20
const operationType = '/';
let result;

switch(operationType) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    case '%':
        result = number1 % number2;
        break;
}
const isEven = result % 2 === 0 ? 'parzysty' : 'nieparzysty';

console.log(`Wynik operacji ${operationType} to: ${result}, który jest ${isEven}.`);