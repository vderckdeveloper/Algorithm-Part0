const id_pw = ["meosseugi", "1234"];
const db = [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]];

const solution = (id_pw, db) => {
    const doesIdExist = db.find(el => el[0] === id_pw[0]);

    if (!doesIdExist) return 'fail';
    if (doesIdExist[1] === id_pw[1]) return 'login';
    return 'wrong pw';
}

solution(id_pw, db);