const num_list = [3, 4, 5, 2, 1];
const result = 1;

const solution = num_list => num_list.reduce((cum, cur) => cum * cur , 1) < Math.pow(num_list.reduce((cum, cur) => cum + cur , 0), 2)  ? 1 : 0;