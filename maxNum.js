const array = [1, 8, 3];

function solution(array) {
    const maxNum = Math.max(...array);
    const index = array.indexOf(maxNum);
    return [maxNum, index];
}

solution(array);