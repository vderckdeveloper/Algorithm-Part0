const n = 1234;

function solution(n) {
    return n.toString().split("").map(num => parseInt(num)).reduce((sum, cur) => sum + cur);
}

solution(n);