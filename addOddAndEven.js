const solution = num_list => {
   const oddSum = num_list.reduce((cum, cur) => cur % 2 !== 0 ? cum.toString() + cur.toString() : cum, 0);
   const evenSum = num_list.reduce((cum, cur) => cur % 2 === 0 ? cum.toString() + cur.toString() : cum, 0);
   return Number(oddSum) + Number(evenSum);
}