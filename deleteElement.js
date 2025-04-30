const arr = [293, 1000, 395, 678, 94];
const delete_list = [94, 777, 104, 1000, 1, 12];


const solution = (arr, delete_list) => {
    const deleteSet = new Set(delete_list);
    return arr.filter(item => !deleteSet.has(item));
}

solution(arr, delete_list);