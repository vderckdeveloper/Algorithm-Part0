const s = "1 2 Z 3";

function solution(s) {
    const sArray = s.split(" ");

    let sum = 0;
    let prevNumber;
    let prevChar;

    for (let i = 0; i < sArray.length; i++) {
        prevNumber = sArray[i] !== 'Z' ? sArray[i] : prevNumber;
        prevChar = sArray[i];

        if (prevChar === 'Z') {
            sum -= parseInt(prevNumber);
        } else {
            sum += parseInt(prevNumber);
        }
    }

    return sum;
}

solution(s);