const num = 29183;
const k = 1;

function solution(num, k) {
    const str = num.toString().split("").indexOf(k.toString());
    return str >= 0 ? str + 1 : -1;
}

solution(num, k);