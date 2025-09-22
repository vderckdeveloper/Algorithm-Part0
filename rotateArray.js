const numbers = [1, 2, 3];
const direction = 'right';

const solution = (numbers, direction) => {
    let numberToPop;
    if (direction === 'right') {
        numberToPop = numbers.pop();
        numbers.unshift(numberToPop);
    } else {
        numberToPop = numbers.shift();
        numbers.push(numberToPop);
    }
    return numbers;
}

solution(numbers, direction);