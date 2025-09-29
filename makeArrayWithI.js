const arr = [1, 4, 2, 5, 3];
const result = [1, 2, 3];

const solution = (arr) => {
    const stk = [];
    let i = 0;
    
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else if (stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }
    return stk;
}

solution(arr);