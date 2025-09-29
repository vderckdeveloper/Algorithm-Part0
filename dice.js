const solution = (a, b, c, d) => {
  const arr = [a, b, c, d];

  const freq = {};
  for (const x of arr) freq[x] = (freq[x] || 0) + 1;

  const entries = Object.entries(freq) 
    .map(([k, v]) => [Number(k), v]);

 
  if (entries.length === 1) {
    const p = entries[0][0];
    return 1111 * p;
  }

  if (entries.length === 2) {
    const [[n1, c1], [n2, c2]] = entries;
    if (c1 === 3 || c2 === 3) {
      const p = c1 === 3 ? n1 : n2;
      const q = c1 === 1 ? n1 : n2;
      return (10 * p + q) ** 2;
    } else {
      const p = n1, q = n2;
      return (p + q) * Math.abs(p - q);
    }
  }

  if (entries.length === 3) {
    const singles = entries.filter(([, cnt]) => cnt === 1).map(([num]) => num);
    return singles[0] * singles[1];
  }

  return Math.min(...arr);
}
