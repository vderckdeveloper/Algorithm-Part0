const hp = 23;

function solution(hp) {
    if (hp < 0 || hp > 1000) return;
    const generalAnt = Math.floor(hp / 5);
    const soldierAnt = Math.floor((hp - 5 * generalAnt)/ 3);
    const laborAnt = Math.floor(hp - 5 * generalAnt - 3 * soldierAnt);
    return generalAnt + soldierAnt + laborAnt;
}

solution(hp);