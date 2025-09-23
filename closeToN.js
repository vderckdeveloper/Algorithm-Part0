const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;

const solution = (numlist, n) => {
    return numlist.sort((a, b) => {
        const distA = Math.abs(a - n);
        const distB = Math.abs(b - n);

        if (distA !== distB) return distA - distB;

        return b - a;
    });
};

solution(numlist, n);