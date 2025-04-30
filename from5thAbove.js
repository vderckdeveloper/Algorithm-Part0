const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];

const solution = (array) => array.sort((a,b) => a - b).slice(5, array.length -1);
solution(num_list);