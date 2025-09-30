const l = 5;
const r = 550;

const solution = (l, r) => {
  const result = [];
  const queue = [5];

  while (queue.length) {
    const n = queue.shift();
    if (n > r) continue;       
    if (n >= l) result.push(n); 

    queue.push(n * 10, n * 10 + 5);
  }

  result.sort((a, b) => a - b);

  return result.length ? result : [-1];
};

