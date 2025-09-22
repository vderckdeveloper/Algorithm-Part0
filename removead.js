const strArr = ["and","notad","abcd"];

const solution = strArr => strArr.filter(item => !item.includes('ad'));

solution(strArr);