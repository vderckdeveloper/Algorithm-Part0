const num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948];
const n = 3;

function solution(num_list, n) {
    let answer = [];

    while(num_list.length > 0) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}

solution(num_list, n);