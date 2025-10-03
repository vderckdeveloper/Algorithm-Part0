const arr = [0, 1, 2, 3, 4];
const queries = [[0, 1], [1, 2], [2, 3]];

const solution = (arr, queries) => {
    for (let j = 0; j < queries.length; j++) {
        const [s, e] = queries[j];
        for (let i = 0; i < arr.length; i++) {
            if(i >= s && i <= e) arr[i] += 1;
        }
    }
    return arr;
}
