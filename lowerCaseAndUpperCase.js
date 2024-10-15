const my_string = "cccCCC";

function isUpperCase(char) {
    return char === char.toUpperCase();
}

function isLowerCase(char) {
    return char === char.toLowerCase();
}

function solution(my_string) {

    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];

        if (isLowerCase(char) === true) answer += char.toUpperCase();
        if (isUpperCase(char) === true) answer += char.toLowerCase();
    }

    return answer;
}

solution(my_string);