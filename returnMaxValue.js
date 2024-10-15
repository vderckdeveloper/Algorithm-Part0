const numbers = [0, -31, 24, 10, 1, 9];

function solution(numbers) {
    // sort numbers
    numbers.sort((a,b) => a-b);
    const farRightMultiple = numbers[numbers.length -1] * numbers[numbers.length - 2];
    const farLeftMultiple = numbers[0] * numbers[1];

    return farRightMultiple > farLeftMultiple ? farRightMultiple : farLeftMultiple;
}