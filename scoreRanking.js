const score = [[80, 70], [90, 50], [40, 70], [50, 80]];

const solution = score => {
    const averages = score.map(([eng, math], idx) => ({
        idx,
        avg: (eng + math) / 2
    }));

    averages.sort((a, b) => b.avg - a.avg);

    const ranks = [];
    averages.forEach((el, i) => {
        const rank = averages.findIndex(v => v.avg === el.avg) + 1;
        ranks[el.idx] = rank;
    });

    return ranks;
}

solution(score);