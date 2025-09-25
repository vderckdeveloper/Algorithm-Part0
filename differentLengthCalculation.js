const arr = [49, 12, 100, 276, 33];
const n = 27;

const solution = (arr, n) => {
    if (arr.length % 2 === 0) {
        return arr.map((el, idx) => {
            if (idx % 2 !== 0) return el + n;
            return el;
        });
    } else {
        return arr.map((el, idx) => {
            if (idx % 2 === 0) return el + n;
            return el;
        });
    }
}



solution(arr);