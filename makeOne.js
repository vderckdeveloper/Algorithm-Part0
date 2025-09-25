const num_list = [12, 4, 15, 1, 14];

const solution = num_list => {
    let count = 0;
    for (let element of num_list) {
        while (element > 1) {
            element = element % 2 === 0 ? element / 2 : (element - 1) / 2;
            count++;
        }
    }
    return count;
}

solution(num_list);