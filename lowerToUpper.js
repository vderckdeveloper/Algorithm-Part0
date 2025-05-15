const my_string = 'my_string';
const alp = 'p';

const solution = (my_string, alp) => {
    return my_string.split('').map(el => {
        if (el === alp) return el.toUpperCase();
        return el;
    }).join('')
}

solution(my_string, alp);