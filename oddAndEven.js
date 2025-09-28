const  solution = n => {
    const isOdd = n % 2 !== 0
    let sum = 0;
    let newNum = n;
    if(isOdd) {
        while(newNum > 0) {
            sum += newNum % 2 !== 0 ? newNum : 0; 
            newNum--;
        }
    } else {
        while(newNum > 0) {
            sum += newNum % 2 === 0 ? newNum * newNum : 0; 
            newNum--;
        }
    }
    return sum;
}