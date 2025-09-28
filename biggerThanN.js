const numbers = [34, 5, 71, 29, 100, 34];
const n = 123;

const solution = (numbers, n) => {
    let sum = 0;
    let i = 0;
    while (sum <= n) {
        sum += numbers[i];
        i++;
    }
    return sum;
};

solution(numbers, n);