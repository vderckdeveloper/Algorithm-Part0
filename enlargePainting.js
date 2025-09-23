const picture = ["x.x", ".x.", "x.x"];
const k = 3;

function solution(picture, k) {
    const expansion = [...picture].map(el => {
        const char = el.split('').map(v => v.repeat(k)).join('');
        return char;
    });

    const result = [];
    expansion.forEach(line => {
        for (let i = 0; i < k; i++) {
            result.push(line);
        }
    });

    return result;
}

solution(picture, k);