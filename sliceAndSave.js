const my_str = 'abc1Addfggg4556b';
const n = 6;

const solution = (my_str, n) => {
    const count = my_str.length / n;

    const answer = [];

    for (let i = 0; i < my_str.length; i += n) {
        let slicedStr = my_str.slice(i, i + n);
        answer.push(slicedStr);
    }

    return answer;
}

solution(my_str, n);