const box = [10, 8, 6];
const n = 3;

const solution = (box, n) => {
    const [width, length, height] = box ;
    return Math.floor(width/n) * Math.floor(length/n) * Math.floor(height/n);
}

solution(box, n);