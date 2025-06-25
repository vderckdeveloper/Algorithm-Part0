const num_list = [4, 2, 6, 1, 7, 6]

const solution = (num_list) => {
    const oddSum = num_list.reduce((cum,cur, i) => {
        if((i + 1) % 2 === 1) return cum+cur;
        else return cum; 
    }, 0);
    const evenSum = num_list.reduce((cum,cur, i) => {
        if((i + 1) % 2 === 0) return cum+cur;
        else return cum; 
    }, 0);
    return oddSum >= evenSum ? oddSum : evenSum;
}
