const my_string = "rermgorpsam";
const queries = [[2, 3], [0, 7], [5, 9], [6, 10]];

const solution = (my_string, queries) => {
  let result = [...my_string]; 
  
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    result = [
      ...result.slice(0, s),
      ...result.slice(s, e + 1).reverse(),
      ...result.slice(e + 1),
    ];
  }

  return result.join(''); 
};

solution(my_string, queries);