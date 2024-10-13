const n = 10;

function solution(n) {
    if (n < 1 || n > 100) return;

    let answer = 1;
    while (true) {
        if (6 * answer % n === 0) {
            break;
        }
        answer++;
    }
    return answer;
}

solution(n);