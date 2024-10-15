const polynomial = "3x + 7 + x";

function solution(polynomial) {
    const array = polynomial.split(" ");

    // calculate the sum of number of x and the sum of number
    let xCount = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.includes('x')) {
            xCount += element.split('x')[0] ? parseInt(element.split('x')[0]) : 1;
        }
        if (!element.includes('x') && parseInt(element) > 0) {
            sum += parseInt(element);
        }
    }

    let answer = '';

    if (xCount > 0) {
        answer += xCount === 1 ? 'x' : xCount + 'x';
    }
    
    if (sum > 0 && xCount > 0) {
        answer += ` + ${sum}`;
    } else if (sum > 0 && xCount === 0) {
        answer += sum;
    }

    return answer;
}

solution(polynomial);