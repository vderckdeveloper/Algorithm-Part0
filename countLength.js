const my_string = 'oxooxoxxox';

const solution = myString => myString.split('x').map(v => v.length);

console.log(solution());