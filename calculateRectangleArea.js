
const dots = [[-1, -1], [1, 1], [1, -1], [-1, 1]];

const solution = dots => {
    const x = dots.map(([x]) => x);
    const y = dots.map(([, y]) => y);
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

solution(dots);