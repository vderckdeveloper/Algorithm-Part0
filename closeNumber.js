const array = [10, 11, 12]	;
const n = 13;

function solution(array, n) {
    array.sort((a, b) => a - b); 

    let designatedNumber;
    let distance = Infinity;  
    
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        const currentDistance = Math.abs(el - n); 
        
        if (currentDistance < distance) {
            designatedNumber = el;
            distance = currentDistance;
        }
    }

    return designatedNumber;
}

solution(array,n);