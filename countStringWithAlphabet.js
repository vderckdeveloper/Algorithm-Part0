const my_string = "Programmers";

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const solution = my_string => {
    const newStr = [...my_string];
    const answer = Array(52).fill(0);  

    for (let i = 0; i < newStr.length; i++) {
        const findIndex = alphabet.indexOf(newStr[i]);
        if (findIndex !== -1) {
            answer[findIndex]++;  
        }
    }

    return answer;
}

solution(my_string);