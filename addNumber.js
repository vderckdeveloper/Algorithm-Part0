const my_string = "aAb1B2cC34oOp";

function solution(my_string) {
    const number = ['0','1','2','3','4','5','6','7','8','9'];
    return my_string.split("").filter(num => number.includes(num)).map(num => parseInt(num)).reduce((sum, cur) => sum + cur);
}