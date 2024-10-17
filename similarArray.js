const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];


function solution(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        const s1Element = s1[i];
        for (let j = 0; j < s2.length; j++) {
            const s2Element = s2[j];
            if(s1Element === s2Element) count++;
        }
    }
    return count;
}

solution(s1, s2);