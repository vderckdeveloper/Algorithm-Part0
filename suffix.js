const my_string = 'banana';

const solution = my_string => [...my_string].map((_, i) => my_string.substring(i)).sort();

solution(my_string);