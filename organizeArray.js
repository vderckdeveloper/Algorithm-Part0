const my_string = "hi12392";

function solution(my_string) {
    const numberStr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return my_string.split("").filter(el => numberStr.includes(el)).map(el => parseInt(el)).sort((a, b) => a - b);
}