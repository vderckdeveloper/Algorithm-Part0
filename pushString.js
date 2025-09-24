
const A = 'atat';
const B = 'tata';

const solution = (A, B) => {
    if (A === B) return 0;

    let pushedString = A;
    // push string to the right 
    for (let i = 0; i < A.length; i++) {
        const removedString = pushedString[pushedString.length - 1];
        pushedString = removedString + pushedString.slice(0, pushedString.length - 1);

        if(B === pushedString) return i+1;
    }

    return -1;
}

solution(A, B);