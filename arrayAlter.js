const arr = [1, 2, 3, 100, 99, 98];
const k = 3;

function solution(arr, k) {
    return arr.map(num => k % 2 === 1 ? num * k : num + k);
}