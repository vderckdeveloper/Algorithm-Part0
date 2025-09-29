const my_string = ["progressive", "hamburger", "hammer", "ahocorasick"];
const parts = [[0, 4], [1, 2], [3, 5], [7, 7]];

const solution = (my_strings, parts) => {
    let answer = '';
    for (let i = 0; i < parts.length; i++) {
        const [s, e] = parts[i];
        const slicedStr = my_strings[i].slice(s, e + 1);
        answer += slicedStr;
    }
    return answer;
}

solution(my_string, parts);