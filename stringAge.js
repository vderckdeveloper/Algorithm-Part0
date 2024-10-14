const age = 23;

function solution(age) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    const ageStr = age.toString();
    let answer = '';
    for (let i = 0; i < ageStr.length; i++) {
        const char = ageStr[i];
        answer += alphabet[char];
    }
    return answer;
}

solution(age);