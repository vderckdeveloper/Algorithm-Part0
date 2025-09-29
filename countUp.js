
const solution = (start_num, end_num) => {
    const arr = [];
    let i = start_num;
    while(i <= end_num) {
        arr.push(i);
        i++;
    }
    return arr;
}