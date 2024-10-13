const n = 10;

function solution(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        if(i % 2 === 0) continue;
        answer.push(i);
    }
    return answer;
}

solution(n);