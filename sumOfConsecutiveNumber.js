const num = 5;
const total = 5;

const solution = (num, total) => {
    const mid = Math.floor(total / num);
    const start = mid - Math.floor((num - 1) / 2);

    const array = [];
    for (let i = 0; i < num; i++) {
        array.push(start + i);
    }

    return array;
}

solution(num, total);