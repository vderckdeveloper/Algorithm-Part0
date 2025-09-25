const arr = [5, 1, 4];

const addElementNthTime = (X, arr) => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i]; j++){
            X.push(arr[i]);
        }
    }
}

const solution = arr => {
    const X = [];
    addElementNthTime(X, arr);
    return X;
}