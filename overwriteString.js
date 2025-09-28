const my_string = 'He11oWor1d';
const overwrite_String = 'lloWorl';
const s = 2;

const solution = (my_string, overwrite_String, s) => {
    const firstStr = my_string.slice(0, s);
    const secondStr = my_string.slice(s + overwrite_String.length);
    return firstStr + overwrite_String + secondStr;
}

solution(my_string, overwrite_String, s);