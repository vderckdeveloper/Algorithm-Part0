const myString = 'AbCdEfG';
const pat = 'aBc';

const solution = (myString, pat) => myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;