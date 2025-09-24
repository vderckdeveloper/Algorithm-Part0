const solution = (date1, date2) => {
    const yearComparsion = date1[0] < date2[0];
    const monthComparsion = date1[0] === date2[0] && date1[1] < date2[1];
    const dateComparsion = date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2];
    if (yearComparsion || monthComparsion || dateComparsion) return 1;
    return 0;
}