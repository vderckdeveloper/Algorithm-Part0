const strArr = ["AAA", "BBB", "CCC", "DDD"];

const solution = (strArr) => strArr.map((el, idx) => idx % 2 !==0 ? el.toUpperCase() : el.toLowerCase());

solution(strArr);