const solution = (my_string, pat) => {
    const patLength = pat.length;    
    let count = 0;
    for (let i = 0; i < my_string.length; i++) {
         const subStr = my_string.substring(i, i + patLength);
         if(subStr === pat) count++;
    }
    return count;
}