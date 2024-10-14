const numbers = [0, 31, 24, 10, 1, 9];

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1] * numbers[numbers.length - 2];    
}
