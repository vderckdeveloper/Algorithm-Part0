const n = 10;
const result = [10, 5, 16, 8, 4, 2, 1];

const solution = (n, acc = []) => {
  acc.push(n);
  if (n === 1) return acc;
  return solution(n % 2 === 0 ? n / 2 : 3 * n + 1, acc);
}