const my_string = 'apporoograpemmemprs';
const indices = [1, 16, 6, 15, 0, 10, 11, 3];

const solution = (my_string, indices) => [...my_string].filter((_, i) => !indices.includes(i)).join('');

solution(my_string, indices);