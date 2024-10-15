const my_string = "nice to meet you";

function solution(my_string) {
    const regex = /[aeiou]/g;
    return my_string.replace(regex,'');
}