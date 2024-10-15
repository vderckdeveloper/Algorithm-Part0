const my_string = 'people';

function solution(my_string) {
    const array = my_string.split('');

    const set = new Set([...array]);
    return [...set].join('');
}

solution(my_string);