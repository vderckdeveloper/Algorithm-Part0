const before = 'olleh';
const after = 'hello';

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

solution(before, after);