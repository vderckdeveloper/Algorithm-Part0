const n = 3;
const numlist = [4, 5, 6, 7, 8, 9, 10, 11, 12];

function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}