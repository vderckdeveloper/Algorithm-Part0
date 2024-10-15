const cipher = "dfjardstddetckdaccccdegk";
const code = 4;

function solution(cipher, code) {
    let answer = '';
    for (let i = 0; i < cipher.length; i++) {
        const char = cipher[i];
        if ((i + 1) % code === 0) answer += char;
    }
    return answer;
}

solution(cipher, code);