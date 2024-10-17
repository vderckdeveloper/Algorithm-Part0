const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];


function solution(s1, s2) {
    return s1.filter(el => s2.includes(el));
}

solution(s1, s2);