const ineq = "<";
const eq = '=';
const n = 20
const m = 20;

const solution = (ineq, eq, n, m) => {
    const result = eq === '=' ? eval(n + ineq + eq + m) : eval(n + ineq + m);
    return result ? 1 : 0;
}

solution(ineq, eq, n, m);