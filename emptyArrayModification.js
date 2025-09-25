const arr = [3, 2, 4, 1, 3];
const flag = [true, false, true, false, false];

const addElementNthTime = (X, el, n) => {
    for(let i =0; i < n; i++) {
        X.push(el)
    }
    return X;
}

const deleteElementNthTime = (X, n) => {
    for(let i =0; i < n; i++) {
        X.pop();
    }
    return X;
}

const solution = (arr, flag) => {
    const X = [];

    for(let i = 0; i < arr.length; i++) {
        if(flag[i] === true) {
            addElementNthTime(X, arr[i], arr[i] * 2);
        } else {
            deleteElementNthTime(X, arr[i]);
        }
    }

    return X;
}

solution(arr,flag);