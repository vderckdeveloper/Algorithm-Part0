const my_string = 'hello';
const num1 = 1;
const num2 = 2;

function solution(my_string, num1, num2) {
    const array = my_string.split('');

    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
    return array.join('');
}

solution(my_string, num1 , num2);