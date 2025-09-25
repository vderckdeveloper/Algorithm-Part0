const strArr = ["a","bc","d","efg","hi"];

const obj = {

};

const solution = strArr => {
    strArr.map(el => {
    const strLength = el.length;
    obj[strLength] ? obj[strLength] += 1 : obj[strLength] = 1;
    });
    return Math.max(...Object.values(obj));
};

solution(strArr);