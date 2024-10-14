const n = 3628800;

function factorial(number) {
    if (number <= 1) return 1;
    return number * factorial(number - 1);
}


function solution(n) {
    let answer;
    for (let i = 1; i <= n; i++) {
        const factorialValue = factorial(i);
        if (factorialValue > n) {
            answer = i - 1;
            break;
        } else if (factorialValue === n) {
            answer = i;
            break;
        }
    }
    return answer;
}