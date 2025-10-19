const solution = (code) => {
  let mode = 0;
  let ret = '';

  for (let i = 0; i < code.length; i++) {
    const ch = code[i];
    if (ch === '1') mode ^= 1;           
    else if (i % 2 === mode) ret += ch;  
  }

  return ret || 'EMPTY';
};