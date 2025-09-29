const solution = (start_num, end_num) => {
    const result = [];
    let startNum = start_num;
    for(let i = startNum; i >= end_num; i--) {
        result.push(startNum);
        startNum--;
    }
    return result;
}