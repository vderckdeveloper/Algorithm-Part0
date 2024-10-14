const n = 20;

function solution(n) {
    // common divisor list
    const commonDivisor = [];

    // push common into array
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) commonDivisor.push(i);
    }

    let count = 0;

    // find twin
    for (let j = 0; j < commonDivisor.length; j++) {
        const firstNum = commonDivisor[j];
        for (let k = 0; k < commonDivisor.length; k++) {
            const secondNum = commonDivisor[k];
            if (firstNum * secondNum === n) count++;
        }
    }

    return count;
}

solution(n);