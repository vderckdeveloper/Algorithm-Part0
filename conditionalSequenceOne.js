const arr = [1, 2, 3, 100, 99, 98];

const solution = arr => {
    let prevArr = arr; 
    let count = 0;

    while (true) {
        const nextArr = prevArr.map(v => {
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } else if (v < 50 && v % 2 === 1) {
                return v * 2 + 1;
            }
            return v; 
        });

        if (prevArr.every((el, idx) => el === nextArr[idx])) {
            return count;
        }

        prevArr = nextArr;
        count++;
    }
};

solution(arr);