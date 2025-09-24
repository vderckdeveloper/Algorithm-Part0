const rank = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];

const map = new Map();

const solution = (rank, attendance) => {
    const participants = rank.filter((el, idx) => {
        map.set(el, idx);
        return attendance[idx];
    }).sort((a,b) => a - b);
    const [rankOne, rankTwo, rankThree] = participants;
    const rankOneIdx = map.get(rankOne);
    const rankTwoIdx = map.get(rankTwo);
    const rankThreeIdx = map.get(rankThree);

    return (10000 * rankOneIdx) + (rankTwoIdx * 100) + rankThreeIdx;
}

solution(rank, attendance);