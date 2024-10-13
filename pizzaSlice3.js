const slice = 7;
const n = 10;

function solution(slice, n) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
        if(slice * i >= n) break 
        else answer++;
    }
    return answer;
}