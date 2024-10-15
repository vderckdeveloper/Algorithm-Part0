const bin1 = '10';
const bin2 = '11';

function solution(bin1, bin2) {
    const number1 = parseInt(bin1, 2);
    const number2 = parseInt(bin2, 2);

    const sum = number1 + number2;
    return sum.toString(2);
}

solution(bin1, bin2);