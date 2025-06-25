const num_list = [4, 2, 6, 1, 7, 6];
const n = 2;

const solution = (num_list,n) => num_list.filter((_, i) => i%n === 0);

solution(num_list, n);