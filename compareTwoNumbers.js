const solution = (a,b )=> {
    const add = parseInt(a.toString() + b.toString());
    const multiple = 2* a * b;
    return add >= multiple ? add : multiple;
}