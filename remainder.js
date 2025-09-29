const number = "123";

const solution = number => [...number].reduce((cum, cur) => Number(cum) + Number(cur), 0) % 9;