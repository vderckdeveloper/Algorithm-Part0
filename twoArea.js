const arr = [1, 2, 1, 4, 5, 2, 9];

const solution = arr => {
    const firstNumberIdx = arr.indexOf(2);
    const lastNumberIdx = arr.lastIndexOf(2);
    if (firstNumberIdx < 0) return [-1];
    return arr.slice(firstNumberIdx, lastNumberIdx + 1);
}

solution(arr);