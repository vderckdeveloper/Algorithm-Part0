const sides = [199, 72, 222];

function solution(sides) {
    sides.sort((a, b) => a - b); // sort in aescending order
    return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

solution(sides);