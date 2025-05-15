const arr1 = [49, 13];
const arr2 = [70, 11, 2];

const solution = (arr1, arr2) => {
    const arrOneLnegth = arr1.length;
    const arrTwoLength = arr2.length;

    if(arrOneLnegth > arrTwoLength) return 1;
    if(arrTwoLength > arrOneLnegth) return -1;

    const sumArrOne = arr2.reduce((acc, cur)=> acc+cur, 0);
    const sumArrTwo = arr1.reduce((acc, cur)=> acc+cur, 0);

    if(sumArrOne > sumArrTwo) return -1;
    if(sumArrTwo > sumArrOne) return 1;
    return 0;
}

solution(arr1, arr2);