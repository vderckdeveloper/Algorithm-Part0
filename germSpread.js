const n = 2;
const t = 10;

function solution(n, t) {
    let initialCount = n;
    for (let i = 0; i < t; i++) {
        initialCount *= 2;
    }
    return initialCount;
}

solution(n, t);