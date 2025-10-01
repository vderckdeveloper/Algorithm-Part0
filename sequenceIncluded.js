const a =3;
const d= 4;
const included = [true, false, false, true, true];

const solution = (a, d, included) => included.map((_,i) => a + d * i).reduce((cum,cur, idx) => included[idx] === true ? cum+cur : cum, 0);
