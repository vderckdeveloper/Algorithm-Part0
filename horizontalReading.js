const my_string = 'ihrhbakrfpndopljhygc';
const m = 4;
const c = 2;

const solution = (my_string, m, c) => {
    const arr = [...my_string];

    const result = [];
    for (let i = 0; i < my_string.length / m; i++) {
        result.push(arr.splice(0, m));
    }

    let answer = '';
    for (let j = 0; j < my_string.length / m; j++) {
        answer += result[j][c - 1];
    }
    return answer;
}

solution(my_string, m, c);