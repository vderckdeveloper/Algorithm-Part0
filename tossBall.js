const numbers = [1, 2, 3, 4]; 
const k = 4;

function solution(numbers, k) {
    let tosser;

    for (let i = 0; i < k; i++) {
        const segment = 2 * i % numbers.length;
        tosser = numbers[segment];
    }

    return tosser;
}

solution(numbers, k);