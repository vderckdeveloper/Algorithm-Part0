const str1 = "ab6CDE443fgh22iJKlmn1o";
const str2 = "ppprrrogrammers";

function solution(str1, str2) {
    return str1.includes(str2) === true ? 1 : 2;
}

solution(str1, str2);