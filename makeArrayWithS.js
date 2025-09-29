const intStrs = ["0123456789", "9876543210", "9999999999999"];
const k = 50000;
const s = 5;
const l = 5;

const solution = (intStrs, k, s, l) => intStrs.map(v => Number(v.slice(s, s + l))).filter(v => v > k);
