const arr = [0, 1, 1, 1, 1];
const k = 4;

const solution = (arr, k) => {
    const arrWithoutDuplication = Array.from(new Set(arr));
    const answer = [];

    // make array without duplicated number 
    for (let i = 0; i < k; i++) {
        answer.push(arrWithoutDuplication[i]);
    }

    // insert -1 if the length of array is shorter than k
    if(answer.length < k) {
        while (answer.length === k) {
            answer.push(-1);
        }
    }

    return answer.map(v => v >= 0 ? v : -1);
}

solution(arr, k);