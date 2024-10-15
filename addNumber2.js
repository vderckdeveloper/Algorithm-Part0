const my_string = "aAb1B2cC34oOp";

function solution(my_string) {
    const regex = /[a-zA-Z]/g;
    const replacedString = my_string.replace(regex, '-').split(" ").join("").split("-");

    let sum = 0;
    for(let i = 0; i < replacedString.length; i++) {
        const el = replacedString[i];
        if (el === '') continue;
        else sum += parseInt(el);
    }
    
    return sum;
}

solution(my_string);