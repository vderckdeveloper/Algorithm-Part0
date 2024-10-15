const n = 12;

function solution(n) {
    // condition
    if (n < 2 || n > 10000) return;

    const commonDivisor = [];
    // find common divisor
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) commonDivisor.push(i);
    }

    const primeFactor = [];
    // find prime facor
    for (let j = 0; j < commonDivisor.length; j++) {
        const element = commonDivisor[j];
        for (let k = 2; k <= element; k++) {
            if (element !== k && element % k === 0) break;
            else if (element === k) primeFactor.push(element);
        }
    }

    // sort array in aescending order
    primeFactor.sort((a,b) => a - b);

    return primeFactor;
}

solution(n);