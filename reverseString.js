const my_string = "Progra21Sremm3";
const s = 6;
const e = 12;

const solution = (my_string, s, e) => my_string.slice(0,s) + my_string.slice(s,e + 1).split("").reverse().join("") + my_string.slice(e + 1);

solution(my_string, s, e);

