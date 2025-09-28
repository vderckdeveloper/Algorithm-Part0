const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    str = input[0];
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        if(lowerCase.includes(str[i])) {
            answer += str[i].toUpperCase();
        } else {
            answer += str[i].toLowerCase();
        }
    }
    console.log(answer);
});
