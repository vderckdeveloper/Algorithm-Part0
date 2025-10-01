const solution = (a, b, c) => {
  const uniq = new Set([a, b, c]).size;      

  const s1 = a + b + c;                     
  const s2 = a ** 2 + b ** 2 + c ** 2;         
  const s3 = a ** 3 + b ** 3 + c ** 3;       

  if (uniq === 3) return s1;
  if (uniq === 1) return s1 * s2 * s3;
  return s1 * s2;
};