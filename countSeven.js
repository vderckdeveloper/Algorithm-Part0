const array = [7, 77, 17];

function solution(array) {
    return array.join('').split('').filter(item => item === '7').length;
}

solution(array);