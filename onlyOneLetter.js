const s = "abcabcadc";

function solution(s) {
    const object = {

    };

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        object[char] > 0 ? object[char] += 1 : object[char] = 1;
    }

    let answer = '';

    for(let el in object) {
        const count = object[el];
        if(count === 1) answer += el;
    }

    return answer.split('').sort().join('');
}

solution(s);