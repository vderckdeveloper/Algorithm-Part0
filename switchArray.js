const arr =[0, 1, 2, 3, 4];
const queries = [[0, 3],[1, 2],[1, 4]];

function solution(arr, queries) {
  for (const [i, j] of queries) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

solution(arr, queries);