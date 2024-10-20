const myString = "abcdevwxyz";

function solution(myString) {
    const alphabet = 'abcdefghijk';
    return myString.split('').map(str => { if (alphabet.includes(str)) return 'l'; else return str;}).join('');
}