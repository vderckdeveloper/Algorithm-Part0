const q = 3;
const r = 1;
const code = 'qjnwezgrpirldywt';

const solution = (q, r, code) => {
    let result = '';
    for (let i = 0; i < code.length; i++) {
        if(i % q === r) result += code[i];
    }
    return result;
}

solution(q, r, code);