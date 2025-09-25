const solution = arr => {
    const stk = [];
    for (let i = 0; i< arr.length ; i++) {
        if(stk.length === 0) {
              stk.push(arr[i]);       
            continue;
        }

        if(stk.length > 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop();
            continue;
        }

        stk.push(arr[i]);
           
    }
    return stk.length ? stk : [-1];
}