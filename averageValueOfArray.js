const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solution(numbers) {
    return numbers.reduce((sum,cur) => sum + cur)/numbers.length;
}